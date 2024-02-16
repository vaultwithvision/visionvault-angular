import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { PersonalInfoComponent } from './auth/signup/personal-info/personal-info.component';
import { PersonalSettingsComponent } from './auth/signup/personal-settings/personal-settings.component';
import { PersonalUploadComponent } from './auth/signup/personal-upload/personal-upload.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    LandingPageComponent,
    TopNavbarComponent,
    PersonalInfoComponent,
    PersonalSettingsComponent,
    PersonalUploadComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
