import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export type Step = "personalInfos" | "personalUploads" | "personalSettings"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  userForm!: FormGroup;
  private currentStepBS: BehaviorSubject<Step> = new BehaviorSubject<Step>("personalInfos");
  public currentStep: Observable<Step> = this.currentStepBS.asObservable();

  constructor( public authService: AuthService, public route: ActivatedRoute, private _formBuilder: FormBuilder  ) {}

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      personalInfos: null,
      personalUploads: null,
      personalSettings: null
    });
  }

  formInitializer(name: string, group: FormGroup) {
    this.userForm.setControl(name, group);
  }

  changeFormStep(currentStep: string, direction: "forward" | "backward") {
    switch(currentStep) {
      case "personalInfos":
        if (direction === "forward") {
          this.currentStepBS.next("personalUploads");
        }
        break;
      case "personalUploads":
        if (direction === "forward") {
          this.currentStepBS.next("personalSettings")
        } else if (direction === "backward") {
          this.currentStepBS.next("personalInfos");
        }
        break;
      case "personalSettings":
        if (direction === "backward") {
          this.currentStepBS.next("personalSettings")
        }
        break;
    }
  }

  // ngOnInit() {
  //   this.userForm = new FormGroup({
  //     "username": new FormControl(null, { validators: [Validators.required, Validators.minLength(7)] }),
  //     "email": new FormControl(null, { validators: [Validators.required] }),
  //     "firstName": new FormControl(null, { validators: [Validators.required]}),
  //     "lastName": new FormControl(null, { validators: [Validators.required]}),
  //     "password": new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
  //     "confirmPassword": new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
  //     "profilePicture": new FormControl(null, { validators: [ Validators.required]}),
  //     "coverImage": new FormControl(null, { validators: [Validators.required]}),
  //   });

  // }

  // onFileChangeProfilePic(fileEvent: Event) {

  //   const inputElement = fileEvent.target as HTMLInputElement;
  //   const files = inputElement.files;

  //   if (files && files.length > 0) {
  //     const file = files[0];
  //     this.userForm.patchValue({ profilePicture: file });
  //     this.userForm.get('profilePicture')?.updateValueAndValidity();
  //     this.readAndDisplayImage(file);
  //   } else {
  //     console.log("No File Selected!");
      
  //   }

  // }

  // onFileChangeCoverImage(fileEvent: Event) {
  //   const inputElement = fileEvent.target as HTMLInputElement;
  //   const files = inputElement.files;

  //   if (files && files.length > 0) {
  //     const file = files[0];
  //     this.userForm.patchValue({ coverImage: file });
  //     this.userForm.get('coverImage')?.updateValueAndValidity();
  //     this.readAndDisplayImage(file);
  //   } else {
  //     console.log("No File Selected!");
      
  //   }
  // }

  // private readAndDisplayImage(file: File) {
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     if (event.target) {
  //       const result = event.target.result;
  //       if (typeof result === 'string') {
  //         this.imagePreviewUrl = result;
  //       } else {
  //         console.error(" Unexpected result type : ", result)
  //       }
  //     }
  //   };

  //   reader.readAsDataURL(file);
  // }

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
