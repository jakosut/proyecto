import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Calculo II',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Hora de clase',
    start: TODAY_STR + 'T18:15:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}