import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { __values } from 'tslib';
import { DocenteService } from '../docente.service';
import { docenteDTO } from '../docenteDTO';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';
import { parsearErroresAPI } from 'src/app/utiles/helpers';
import {MatDialog} from '@angular/material/dialog'
import { DialogoConfirmacionComponent } from 'src/app/utiles/dialogo-confirmacion/dialogo-confirmacion.component';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrls: ['./lista-docentes.component.css']
})
export class ListaDocentesComponent implements OnInit {


  constructor(private docenteService: DocenteService,private dialog: MatDialog) { }
  errores: string[]=[];
  listaDocentes : docenteDTO []=[];
  listaFiltrada : Observable <docenteDTO []>;
  listaOriginal : docenteDTO[];
  myControl = new FormControl('');
  totalRegistrosPorPagina;
  paginaActual=1;
  cantidadRegistrosAMostrar = 10;
  displayedColumns: string[] = ['nombre', 'apellido','email', 'ver'];
  dataSource = new MatTableDataSource<docenteDTO>(this.listaDocentes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  doc:Boolean;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
    this.doc=false;
  }
  cargarRegistros(pagina:number,totalRegistrosPorPagina: number ){
    this.docenteService.obtenerTodos(pagina,totalRegistrosPorPagina).subscribe({
      next: (respuesta:HttpResponse<docenteDTO[]>) =>
      this.cargarTabla(respuesta.body,respuesta.headers.get('totalRegistrosPorPagina')),
      error: (e) => this.errores = e.error
    });
  }
  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
  }
  cargarTabla(body, headers){
    this.totalRegistrosPorPagina= headers;
    this.listaDocentes = body;
  }
  
}

