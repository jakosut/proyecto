import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import { parsearErroresAPI } from 'src/app/utiles/helpers';
import { UsuarioService } from '../usuario.service';
import { usuarioDTO } from '../usuarioDTO';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private activatedRoute: ActivatedRoute,private router:Router ,private seguridadService:SeguridadService) { }
  usuario: usuarioDTO;
  idUsaurio
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.idUsaurio= params.id
    });
   this.usuarioService.obtenerUsuario(this.idUsaurio).subscribe(
    data => 
    this.usuario = data);
  }
  guardarCambios( usuario : usuarioDTO){
    console.log(usuario);
  }

}
