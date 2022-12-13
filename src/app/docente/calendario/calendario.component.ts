import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import {Calendar} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './eventos';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendario_docente',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioDocenteComponent{ // implements OnInit {

  constructor() { 
    const name = Calendar.name;
  }
 // @Input()
 // headerToolbarValues;

  //ngOnInit(): void {}
    calendarVisible = true;
    calendarOptions: CalendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,listWeek'
      
      },
        initialView: 'timeGridWeek',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
     //   select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this)
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
       
      };
      currentEvents: EventApi[] = [];
    
      handleCalendarToggle() {
        this.calendarVisible = !this.calendarVisible;
      }
    
      handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
      }
   /* 
      handleDateSelect(selectInfo: DateSelectArg) {
        const title = prompt('Ingresar Curso que desea agregar');
        const calendarApi = selectInfo.view.calendar;
    
        calendarApi.unselect(); // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          });
        }
      }
    */
      handleEventClick(clickInfo: EventClickArg) {
        if (confirm(`Está seguro que desea borrar el curso '${clickInfo.event.title}'`)) {
          
          clickInfo.event.remove();
        }
      }
    
      handleEvents(events: EventApi[]) {
        this.currentEvents = events;
      }
    
    }
