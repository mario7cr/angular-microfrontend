import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from 'projects/mdmf-shared/src/lib/app-state/actions/user.action';
import { User } from 'projects/mdmf-shared/src/lib/app-state/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.profileForm = this.createForm();
  }

  ngOnInit(): void {}

  get controls(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  /**
   * Initialize the form
   */
  createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  /**
   * Handle the add user when the 'Create User' button is clicked
   * @param name: user's name
   * @param email: user's email
   */
  addUser(name: string, email: string): void {
    this.store.dispatch(new AddUser({ name, email }));
    this.profileForm.reset();
  }
}
