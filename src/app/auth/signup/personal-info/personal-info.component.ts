import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent  implements OnInit {

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
