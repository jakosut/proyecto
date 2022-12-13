import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  constructor() { }
  headerToolbar= {
    left: '',
    center: 'title',
    right: 'dayGridWeek'
  }
  ngOnInit(): void {
  }

}
