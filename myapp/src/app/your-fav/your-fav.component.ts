import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogService} from "../Services/blog.service";
import {Router} from "@angular/router"
import {IBlog} from "../Interface/IBlog"
@Component({
  selector: 'app-your-fav',
  templateUrl: './your-fav.component.html',
  styleUrls: ['./your-fav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class YourFavComponent implements OnInit {

  constructor(private _blogService:BlogService,private _router:Router) { }
  favBlogs:IBlog[];
  userId:number = +sessionStorage.getItem('id');

  ngOnInit() {
    if(this.userId){
      this._blogService.getBlogs().subscribe(blog=>{this.favBlogs= blog;
        this.favBlogs=this.favBlogs.filter(b=>b.favourites.includes(this.userId))
      })
    }
    else{this._router.navigate(['/home'])}

  }

}
