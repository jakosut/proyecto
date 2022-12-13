import { Component, Input, OnInit, ViewChild } from '@angular/core';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import {Calendar} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './eventos';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
  
  let calendarEl = document.getElementById('mycalendar');

  let calendar = new Calendar(calendarEl, {
   // plugins: [ interactionPlugin ],
  }); 
});

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})


export class CalendarioComponent{// implements OnInit {
  events: any[];
  options: any;
  theCheckbox: boolean = false;
  
  ngOnInit() {
    let draggableEl = document.getElementById('external-events'); 
    var self = this;

    new Draggable(draggableEl, {
      itemSelector: '.fc-event',
      eventData:{
        
        duration:'01:20',
  
        function(eventEl: any) {
        console.log(eventEl);
        
        if (self.theCheckbox) {
          eventEl.parentNode.removeChild(eventEl);
        }
        return {
          title: eventEl.innerText
        };
      }
    }});
    
    /*
    new Draggable(draggableEl, {
      eventData: {
        title: 'clases',
        duration: '01:20'
      }
    });

    this.events = [
      {
        id: 1,
        title: 'Clase',
        duration: '01:20'
      },
      {
        id: 2,
        title: 'All Day Event',
        start: '2017-02-01'
      },
      {
        id: 3,
        title: 'Long Event',
        start: '2017-02-07',
        end: '2017-02-10'
      },
      {
        id: 4,
        title: 'Repeating Event',
        start: '2017-02-09T16:00:00'
      }
    ];*/}

 // @Input()
 // headerToolbarValues;

  //ngOnInit(): void {}
    calendarVisible = true;
    
    calendarOptions: CalendarOptions = {
      locale:esLocale,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,listWeek'
        //right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
        initialView: 'timeGridWeek',
        //initialEvents: this.events, // alternatively, use the `events` setting to fetch from a feed
        droppable:true,
        weekends: false,
        editable: true,
        selectable: true,
        //selectMirror: true,
        //dayMaxEvents: true,
        //monthMode:false,
      
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this),
        eventChange:this.handleEventChange.bind(this),
        
        //eventAdd:this.handleEventAdd.bind(this),
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
    
      handleDateSelect(selectInfo: DateSelectArg) {
        const title = prompt('Nombre de la Clase que desea agregar');
        const idClase = prompt('Ingrese el IdClase');
        const calendarApi = selectInfo.view.calendar;
    
        calendarApi.unselect(); // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            idClase, // modificar para insertar el idClase en BD
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          });
        }
      }
    
      handleEventClick(clickInfo: EventClickArg) {

        //confirm(`Está seguro que desea borrar el curso '${clickInfo.event.title}'`)) {
        if (new Option('opcion1', 'opcion2')){
            clickInfo.event.remove();
        }
      }
      handleEventAdd(clickInfo: EventClickArg) {

       // if (confirm(`Está seguro que desea agregar el evento '${clickInfo.event.title}'`)) {
         //   clickInfo.event....;
        //}
      }
      handleEvents(events: EventApi[]) {
        this.currentEvents = events;
      }

      handleEventChange(selectInfo: DateSelectArg){
        const title = prompt('Desea modificar la Clase?');
      }
    
    }