import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from '../seguridad/seguridad.service';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message="BIENVENIDO USUARIO!";
  cardslist = [{ icon:'date_range', num:23, name:'Armar Grilla',route:'/armargrilla'},
  {icon:'calendar_today', num:0, name:'Materias',route:'/materias'},
  { icon:'group', num:0, name:'Usuarios',route:'/tablero-usuario'},
  { icon:'group', num:2, name:'Docentes',route:'/tablero-docente'},
  { icon:'chat_bubble', num:15, name:'Notificaciones',route:'/nptificaciones'},
  { icon:'date_range', num:23, name:'Días de clase',route:'/diasdeclase'}
];
  
  constructor(private usuarioService:UsuarioService,private seguridadService:SeguridadService, private router:Router) {}

  ngOnInit(): void {
    this.usuarioService.obtenerCantidadUsuarios().subscribe({
      next: (res)=>{
        
      this.cardslist[2].num=res
      }
    });
  }
  

  

}
