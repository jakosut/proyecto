import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import { CalendarioComponent } from 'src/app/utiles/calendario/calendario.component';
import { DocenteService } from '../docente.service';
import { docenteDTO } from '../docenteDTO';
import { ListaDocentesComponent } from '../lista-docentes/lista-docentes.component';

@Component({
  selector: 'app-tabla-calendario',
  templateUrl: './tabla-calendario.component.html',
  styleUrls: ['./tabla-calendario.component.css']
})
export class TablaCalendarioComponent implements OnInit {
nombre:string
  constructor(private docenteService:DocenteService,private activatedRoute: ActivatedRoute,private router:Router ,private seguridadService:SeguridadService) { }
  docente:docenteDTO;
  idUsaurio
 ngOnInit(): void {
  this.activatedRoute.params.subscribe(params =>{
    this.idUsaurio= params.id
  });
 this.docenteService.obtenerUsuario(this.idUsaurio).subscribe(
  data => 
  this.docente = data);
}
}
