import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { __values } from 'tslib';
import { UsuarioService } from '../usuario.service';
import { usuarioDTO } from '../usuarioDTO';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';
import { parsearErroresAPI } from 'src/app/utiles/helpers';
import {MatDialog} from '@angular/material/dialog'
import { DialogoConfirmacionComponent } from 'src/app/utiles/dialogo-confirmacion/dialogo-confirmacion.component';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,private dialog: MatDialog) { }
  errores: string[]=[];
  listaUsuarios : usuarioDTO []=[];
  listaFiltrada : Observable <usuarioDTO []>;
  listaOriginal : usuarioDTO[];
  myControl = new FormControl('');
  totalRegistrosPorPagina;
  paginaActual=1;
  cantidadRegistrosAMostrar = 10;
  displayedColumns: string[] = ['nombre', 'apellido', 'email','direccion','rol','ver','eliminar'];
  dataSource = new MatTableDataSource<usuarioDTO>(this.listaUsuarios);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
  }
  cargarRegistros(pagina:number,totalRegistrosPorPagina: number ){
    this.usuarioService.obtenerTodos(pagina,totalRegistrosPorPagina).subscribe({
      next: (respuesta:HttpResponse<usuarioDTO[]>) =>
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
    this.listaUsuarios = body;
  }
  eliminarUsuario(id:string) {
    const dialogRef = this.dialog.open(DialogoConfirmacionComponent,{
      data:{
        message: '¿Esta seguro que desea eliminar este usuario?',
        buttonText: {
          ok: 'Si',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.usuarioService.eliminarUsuario(id).subscribe((
          (error) => { 
            this.errores = parsearErroresAPI(error);
          }
        ));
        this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
      }
    });
}
}
