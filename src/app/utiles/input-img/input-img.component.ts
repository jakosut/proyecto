import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
  @Input()
  urlImagenActual:string;
  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  imagenBase64: string;

  ngOnInit(): void {
  }
  change(event){
    if(event.target.files.length > 0){
      const file:File = event.target.files[0];
      toBase64(file).then((value: string) => this.imagenBase64 = value )
      .catch(error => console.log(error));
      this.archivoSeleccionado.emit(file);
      this.urlImagenActual=null;
    }
  }
}
