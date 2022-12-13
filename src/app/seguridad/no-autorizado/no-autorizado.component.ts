import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-no-autorizado',
  templateUrl: './no-autorizado.component.html',
  styleUrls: ['./no-autorizado.component.css']
})
export class NoAutorizadoComponent implements OnInit {

  constructor(private seguridadService:SeguridadService, private router: Router) { }

  ngOnInit(): void {
    if(!this.seguridadService.estaLogueado()){
      this.router.navigate(['/','login']);
    }
  }

}
