import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

   @Input() movie;
   @Output() message = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.movie);
  }

  emitToMyFather() {
    // Vamos a emitir el mensaje padre
    this.message.emit(`Página de movie ${this.movie.id} emitida`);
    // Navegar a la página de de talles
    this.router.navigate(['profile', this.movie.id]);
  }

}
