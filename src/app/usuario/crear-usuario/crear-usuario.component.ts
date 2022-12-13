import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import { parsearErroresAPI } from 'src/app/utiles/helpers';
import { UsuarioService } from '../usuario.service';
import { usuarioDTO } from '../usuarioDTO';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(private router:Router ,private seguridadService:SeguridadService,private usuarioService:UsuarioService) { }
  errores: string[]=[];
  usuario: usuarioDTO;
  
  ngOnInit(): void {
  }
  guardarCambios( usuario : usuarioDTO){
    console.log('Entro a guardar, a ver que llego');
    console.log(usuario);
    this.usuarioService.crearUsuario(usuario).subscribe({
      next:(res)=>{
        alert('Usuario creado correctamente');
        this.router.navigate(['/', 'home']);
      },
      error:(error) => { 
        this.errores = parsearErroresAPI(error);
      }
  });
  };
}
