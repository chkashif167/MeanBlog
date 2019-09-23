import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { runInThisContext } from 'vm';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private _router: Router) {}


  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email,Validators.required]),
    password: new FormControl(null, [Validators.required]),
    cpassword: new FormControl(null, [Validators.required]),
  });
  ngOnInit() {}

  moveToLogin() {
    this._router.navigate(["/login"]);
  } 
  register() {
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpassword.value)){
      console.log("invalid form"); return;
    }
    console.log(JSON.stringify(this.registerForm.value))
    
  }
}
