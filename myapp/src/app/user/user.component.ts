import { Component, OnInit, ViewEncapsulation,OnChanges } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../Services/user.service"
import {Iuser} from "../Interface/Iuser";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  loginUser: Iuser;
  constructor(private _router: Router, private _user:UserService) { }

  ngOnInit() {
    if(this.userId){
      this._router.navigate(['/loggedin'])
    }

  }

  userId:number = +sessionStorage.getItem('id');
  onLogIn(name, password){
    this._user.getUser(name,password).subscribe(user=>{this.loginUser = user;
    if (this.loginUser){
      sessionStorage.setItem('id', this.loginUser.id.toString());
      sessionStorage.setItem('name', this.loginUser.name);
      {this._router.navigate(['/loggedin'])}
       location.reload();
    }
    else
    alert("Invalid user name or password. Try again!!")

    });

  }

}
