import {Component, OnInit, Output, ViewEncapsulation,EventEmitter,Input} from '@angular/core';
import {UserService} from "../Services/user.service";
import {Iuser} from "../Interface/Iuser";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavouritesComponent implements OnInit {

  userId:number = +sessionStorage.getItem('id');
  @Input () blogFav=[];


  constructor() { }

  ngOnInit() {

      if(this.userId){
        this.favMarkedStatus = this.blogFav.includes(this.userId);
      }




  }

  @Output() Markfav: EventEmitter<Iuser>= new EventEmitter<Iuser>();
  favMarkedStatus: boolean;
  onClick(userId){
    this.Markfav.emit(userId);
    this.favMarkedStatus = !this.favMarkedStatus;
  }

}
