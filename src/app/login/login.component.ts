import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { credencialesUsuario } from '../seguridad/seguridad';
import { SeguridadService } from '../seguridad/seguridad.service';
import { parsearErroresAPI } from '../utiles/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errores: string [] =[];
  form: FormGroup;
  credenciales: credencialesUsuario;
  constructor(private formBuilder:FormBuilder,private seguridadService: SeguridadService,private router:Router,private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:[
        '',
        {validators: [Validators.required]

        }],
        password:[
          '',
          {validators: [Validators.required]
  
          }]
    });
  }
  submit(){
    this.credenciales= this.form.value;
    this.seguridadService.login(this.credenciales).subscribe({
      next:(res)=>{
        this.seguridadService.guardarToken(res.token,res.expiracion);
        this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#FFFFFF';
        this.router.navigate(['']);
      },
      error:(errores) => this.errores = parsearErroresAPI(errores)
    })
  }

}
