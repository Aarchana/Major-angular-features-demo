import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { canDeactivateComponent } from 'src/app/can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit, canDeactivateComponent {

  profileForm: FormGroup;
  changesSaved: boolean;
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      mobile: new FormControl(null, [Validators.required]),
      Address: new FormControl(null),
    })
  }

  save() {
    console.log(this.profileForm)
    this.changesSaved = true;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.changesSaved && this.profileForm.dirty) {
      return confirm('Do you want to discard changes')
    } else {
      return true;
    }
  }

}
