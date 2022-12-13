import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-semanal',
  templateUrl: './vista-semanal.component.html',
  styleUrls: ['./vista-semanal.component.css']
})
export class VistaSemanalComponent implements OnInit {

  constructor() { }
  diasDeLaSemana:[{dia:'Lunes'},{dia:'Martes'},{dia:'Miercoles'},{dia:'Jueves'},{dia:'Viernes'}];
  listaHorario =[];
  materias=[{nombre:'Algoritmos 1'},{nombre:'Calculo 1'},{nombre:'Algebra 1'},{nombre:'Fisica 1'},{nombre:'Discreta 1'}]
  listaFila=[]
  ngOnInit(): void {
    console.log('entro a la vista semanal');
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
