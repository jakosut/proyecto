import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { SeguridadService } from '../seguridad/seguridad.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mostrar:Observable<boolean>;
  currentRoute;
  constructor(private seguridadService:SeguridadService, private router:Router) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentRoute = e.url;       
 });
   }

  ngOnInit(): void {
    this.mostrar = this.seguridadService.isLoggedIn;
  }
  
}
