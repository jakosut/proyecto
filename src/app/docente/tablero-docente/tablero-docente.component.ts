import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';

@Component({
  selector: 'app-tablero-docente',
  templateUrl: './tablero-docente.component.html',
  styleUrls: ['./tablero-docente.component.css']
})
export class TableroDocenteComponent implements OnInit {

  constructor(private seguridadService:SeguridadService, private router:Router) { }

  ngOnInit(): void {
  }

}
