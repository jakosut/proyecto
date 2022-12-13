import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from '../seguridad/seguridad.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  constructor(private seguridadService:SeguridadService, private router:Router) { }
  messagesReceived = [
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'Se genero horario nuevo',hour:'17:07'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'Se modifico el horario generado',hour:'17:12'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'horario pendiente de apropacion',hour:'17:13'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'Se genero horario nuevo',hour:'17:07'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'Se modifico el horario generado',hour:'17:12'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'horario pendiente de apropacion',hour:'17:13'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'Se genero horario nuevo',hour:'17:07'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'Se modifico el horario generado',hour:'17:12'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'horario pendiente de apropacion',hour:'17:13'},
    {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'horario aprobado',hour:'17:44'}
];
  ngOnInit(): void {
  }

}
