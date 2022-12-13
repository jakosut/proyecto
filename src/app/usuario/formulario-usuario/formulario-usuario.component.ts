import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { roles, usuarioDTO } from '../usuarioDTO';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  @Input()
  errores : string[]=[];
  @Input()
  usuario : usuarioDTO;
  @Output()
  submit: EventEmitter<usuarioDTO> = new EventEmitter<usuarioDTO>();

  form:FormGroup;
  rol= new FormControl();

  opciones:[{valor:0 ,nombre:'Admin'},{valor:1 ,nombre:'Director'},{valor:2 ,nombre:'Profesor'},{valor:3 ,nombre:'Alumno'}];
  selected = roles.admin;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {validators: [Validators.required]

        }
      ],
      apellido: [
        '',
        {validators: [Validators.required]

        }
      ],
      direccion:'',
      email:'',
      password:'',
      rol:0,
    });
    if(this.usuario !== undefined){
      this.form.patchValue(this.usuario);
  }
}
  guardarCambios(){
    console.log('formulario');
    console.log(this.form.value);
    this.submit.emit(this.form.value);
  }
}
