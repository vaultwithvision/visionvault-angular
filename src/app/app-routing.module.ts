import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PersonalInfoComponent } from './auth/signup/personal-info/personal-info.component';
import { PersonalUploadComponent } from './auth/signup/personal-upload/personal-upload.component';
import { PersonalSettingsComponent } from './auth/signup/personal-settings/personal-settings.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent, children: [
    {path: "personal-infos", component: PersonalInfoComponent},
    {path: "personal-uploads", component: PersonalUploadComponent},
    {path: "personal-settings", component: PersonalSettingsComponent},
  ]},
  {path: "verify-email", component: VerifyEmailComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "user-profile", component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
