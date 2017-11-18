import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId:number = +sessionStorage.getItem('id');
  name:string =sessionStorage.getItem('name');


  onSignOut(){
    sessionStorage.clear();
    location.reload();
  }
}
