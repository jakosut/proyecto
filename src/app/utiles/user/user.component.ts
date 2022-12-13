import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private seguridadService: SeguridadService, private router:Router) { }
  email: string
  ngOnInit(): void {
    this.email = this.seguridadService.obtenerCampoJWT('email');
  }
  cerrarSesion(){
    this.seguridadService.logout();
    this.router.navigate(['login']);
  }
}
