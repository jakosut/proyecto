import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { ListaUsuariosComponent } from './usuario/lista-usuarios/lista-usuarios.component';
import { TableroUsuarioComponent } from './usuario/tablero-usuario/tablero-usuario.component';
import { EsDirectorGuard } from './es-director.guard';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ListaDocentesComponent } from './docente/lista-docentes/lista-docentes.component';
import { TableroDocenteComponent } from './docente/tablero-docente/tablero-docente.component';
import { TablaCalendarioComponent } from './docente/tabla_calendario/tabla-calendario.component';
const routes: Routes = [
  
  {path:'',component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  /* Materias*/ 
  {path:'materias',component:MateriasComponent,canActivate: [AuthGuard]},
  /* Notificiones*/ 
  {path:'notificaciones', component: NotificacionesComponent},
  /* Usuarios*/ 
  {path:'editar-usuario/:id', component: EditarUsuarioComponent,canActivate: [AuthGuard]},
  {path:'crear-usuario', component: CrearUsuarioComponent,canActivate: [AuthGuard]},
  {path:'lista-usuario', component: ListaUsuariosComponent,canActivate: [AuthGuard]},
  {path:'lista-docente', component: ListaDocentesComponent,canActivate: [AuthGuard]},
  {path:'tablero-usuario', component: TableroUsuarioComponent,canActivate: [AuthGuard]},
  /*Docentes*/
  {path:'tablero-docente', component: TableroDocenteComponent,canActivate: [AuthGuard]},
  {path:'tabla-calendario', component: TablaCalendarioComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
