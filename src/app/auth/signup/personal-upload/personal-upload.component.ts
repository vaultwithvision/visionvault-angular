import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-upload',
  templateUrl: './personal-upload.component.html',
  styleUrls: ['./personal-upload.component.css']
})
export class PersonalUploadComponent {
  @Input() startingForm!: FormGroup;
  @Output() formInitializer: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeFormStep: EventEmitter<string> = new EventEmitter<string>();

  public personalInfosForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.startingForm) {
      this.personalInfosForm = this.startingForm;
    } else {
      this.personalInfosForm = this._formBuilder.group({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
      })
    }
    this.formInitializer.emit(this.personalInfosForm);
  }

  doChangeStep(direction: "forward") {
    this.changeFormStep.emit(direction);
  }

}
