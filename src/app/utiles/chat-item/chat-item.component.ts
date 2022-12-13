import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  constructor() { }
  @Input()
  messageReceived
  ngOnInit(): void {
    console.log('entro');
    console.log(this.messageReceived);
    if(this.messageReceived= undefined){
      console.log('a ver que tiene');
      console.log(this.messageReceived);
      this.messageReceived = {imageUrl:'../../assets/icon.png', userName:"Univesidad catolica",rol:"sistema de notificaciones", msg:'horario pendiente de apropacion',hour:'17:44'}
    }}

}
