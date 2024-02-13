import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  userForm!: FormGroup;
  imagePreviewUrl!: string;

  constructor( public authService: AuthService, public route: ActivatedRoute  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      "username": new FormControl(null, { validators: [Validators.required, Validators.minLength(7)] }),
      "email": new FormControl(null, { validators: [Validators.required] }),
      "firstName": new FormControl(null, { validators: [Validators.required]}),
      "lastName": new FormControl(null, { validators: [Validators.required]}),
      "password": new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      "confirmPassword": new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      "profilePicture": new FormControl(null, { validators: [ Validators.required]}),
      "coverImage": new FormControl(null, { validators: [Validators.required]}),
    });

  }

  onFileChangeProfilePic(fileEvent: Event) {

    const inputElement = fileEvent.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      const file = files[0];
      this.userForm.patchValue({ profilePicture: file });
      this.userForm.get('profilePicture')?.updateValueAndValidity();
      this.readAndDisplayImage(file);
    } else {
      console.log("No File Selected!");
      
    }

  }

  onFileChangeCoverImage(fileEvent: Event) {
    const inputElement = fileEvent.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      const file = files[0];
      this.userForm.patchValue({ coverImage: file });
      this.userForm.get('coverImage')?.updateValueAndValidity();
      this.readAndDisplayImage(file);
    } else {
      console.log("No File Selected!");
      
    }
  }

  private readAndDisplayImage(file: File) {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target) {
        const result = event.target.result;
        if (typeof result === 'string') {
          this.imagePreviewUrl = result;
        } else {
          console.error(" Unexpected result type : ", result)
        }
      }
    };

    reader.readAsDataURL(file);
  }

  onRegister() {
    if (this.userForm.invalid) {
      alert("Please enter valid data to register!");
      return;
    }

    const { username: userUsername, 
      email: userEmail,
      firstName: userFirstName,
      lastName: userLastName,
      password: userPassword,
      confirmPassword: userConfirmPassword,
      profilePicture: userProfilePicture,
      coverImage: userCoverImage
    } = this.userForm.value;

    this.authService.registerUser(userUsername,userEmail, userFirstName, userLastName,
      userPassword, userConfirmPassword, userProfilePicture, userCoverImage);

  }

}
