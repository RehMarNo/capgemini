import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  msg: string = 'Você deve ser um administrador para proseguir'

  constructor() { }

  ngOnInit(): void {
  }

}
