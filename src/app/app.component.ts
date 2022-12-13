import { Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad/seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArmadorHorariosUCU';
  opened = false;
  isLogin = false;
  constructor(private elementRef: ElementRef, private router: Router) {}
    ngAfterViewInit() {
      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          if(e.url== '/login'){
            this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = '#052d63';
          }
        }
      });
    }
}
