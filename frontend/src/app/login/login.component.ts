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
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  login() {
    //alert("afdsa")
    if(!this.loginForm.valid){
      console.log("invalid form"); return;
    }

    console.log(JSON.stringify(this.loginForm.value))
  }
}
