import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  moveToRegister() {
    this._router.navigate(["/register"]);
  }

  loginForm : FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [ Validators.required]),
  });

  login() {
    alert("afdsa")
  }
}
