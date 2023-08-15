import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  createUserForm = new FormGroup ( {
    firstName: new FormControl(null, [Validators.required]),
    surName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    rePassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    address: new FormControl(null, [Validators.required])
  })
}
