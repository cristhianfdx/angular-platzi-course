import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    this.buildForm();
  }

  ngOnInit() {}

  register(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const values = this.form.value;
      this.authService.createUser(values.email, values.password)
      .then(() => {
        this.router.navigate(['auth/login']);
      })
      .catch(err => console.error(err));
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
