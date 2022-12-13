import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';

@Component({
  selector: 'app-tablero-usuario',
  templateUrl: './tablero-usuario.component.html',
  styleUrls: ['./tablero-usuario.component.css']
})
export class TableroUsuarioComponent implements OnInit {

  constructor(private seguridadService:SeguridadService, private router:Router) { }

  ngOnInit(): void {
  }

}
