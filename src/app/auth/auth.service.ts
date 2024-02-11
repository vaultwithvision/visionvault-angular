import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  BASE_API_URL="http://localhost:3000/api/v1"

  constructor( private http: HttpClient, private router: Router ) {  }

  // auth service to register new user
  registerUser(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
    pfofilePicture?: File,
    coverImage?: File) {
    
    // Validate password
    if (password !== confirmPassword) {
      alert("Your password and confirm password don't match!");
      return;
    }

    // Prepare user data
    const userData = new FormData();
    userData.append("username", username);
    userData.append("email", email);
    userData.append("firstName", firstName);
    userData.append("lastName", lastName);
    userData.append("password", password);  

    if (pfofilePicture && pfofilePicture.name) {
      userData.append("pfofilePicture", pfofilePicture, pfofilePicture.name);
    }

    if (coverImage && coverImage.name) {
      userData.append("coverImage", coverImage, coverImage.name);
    }

    // Send HTTP request to register user
    this.http.post<{message: string, user: any}>(
      `${this.BASE_API_URL}/user/register`,
      userData
    ).pipe(
      catchError(error => {
        // Handle HTTP errors
        console.log(error);
        alert('Registration failed. Please try again.');
        return throwError(() => error);   // Updated usage of throwError
      })
    )
    .subscribe(
      (responseData) => {
        const user = {
          _id: responseData.user._id,
          username: username,
          email: email,
          firstName: firstName,
          lastname: lastName,
          profilePicture: responseData.user.profilePicture,
          coverImage: responseData.user.coverImage,
        }
        if (responseData) {
          // Navigate to verification page upon successful registration
          this.router.navigate(["/verify-email"]);
        }
      }
    );

  };

  // auth service for login user
  loginUser (
    email: string,
    password: string
  ) {

  };

  // auth service for verifying email
  verifyEmail() {}

  // auth service for forgot password
  forgotPassword() {}

  // auth service to get user details
  getUserDetails() {}
  
}
