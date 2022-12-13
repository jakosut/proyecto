import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { MarkdownModule } from 'ngx-markdown';
//import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgChartsModule } from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http'
import { MaterialModule} from './material/material.module';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import {DragDropModule} from '@angular/cdk/drag-drop';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { CalendarioComponent } from './utiles/calendario/calendario.component';
import { InputImgComponent } from './utiles/input-img/input-img.component';
import { ListadoGenericoComponent } from './utiles/listado-generico/listado-generico.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component'; 

import { UserComponent } from './utiles/user/user.component';
import { FormularioUsuarioComponent } from './usuario/formulario-usuario/formulario-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ChatItemComponent } from './utiles/chat-item/chat-item.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { MostrarErroresComponent } from './utiles/mostrar-errores/mostrar-errores.component';
import { ListaUsuariosComponent } from './usuario/lista-usuarios/lista-usuarios.component';
import { AutocompletarComponent } from './utiles/autocompletar/autocompletar.component';
import { TableroUsuarioComponent } from './usuario/tablero-usuario/tablero-usuario.component';

import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LoginComponent } from './login/login.component';
import { ImportarUsuariosComponent } from './usuario/importar-usuarios/importar-usuarios.component';
import { NoAutorizadoComponent } from './seguridad/no-autorizado/no-autorizado.component';
import { ListaDocentesComponent } from './docente/lista-docentes/lista-docentes.component';
import { TableroDocenteComponent } from './docente/tablero-docente/tablero-docente.component';
import { CalendarioDocenteComponent } from './docente/calendario/calendario.component';
import { TablaCalendarioComponent } from './docente/tabla_calendario/tabla-calendario.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
])

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MateriasComponent,
    CalendarioComponent,
    CalendarioDocenteComponent,
    InputImgComponent,
    ListadoGenericoComponent,
    NotificacionesComponent,
    UserComponent,
    FormularioUsuarioComponent,
    EditarUsuarioComponent,
    ChatItemComponent,
    CrearUsuarioComponent,
    MostrarErroresComponent,
    ListaDocentesComponent,
    TablaCalendarioComponent,
    TableroDocenteComponent,
    CalendarioDocenteComponent,
    ListaUsuariosComponent,
    AutocompletarComponent,
    TableroUsuarioComponent,
    AutorizadoComponent,
    LoginComponent,
    ImportarUsuariosComponent,
    NoAutorizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    FullCalendarModule,
    DragDropModule,
    MaterialModule       /* libreria material*/
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
