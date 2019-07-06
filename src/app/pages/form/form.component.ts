import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user = {
    email: "",
    password: ""
  }


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submit", this.user);

    // Servicio
    // servicio.register(this.user)
  }

}
