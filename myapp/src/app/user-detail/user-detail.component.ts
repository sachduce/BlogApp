import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogService} from "../Services/blog.service"
import {IBlog} from "../Interface/IBlog";
import {Router} from "@angular/router"
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {

  constructor(private _blogService:BlogService, private _router:Router) { }

  userId:number = +sessionStorage.getItem('id');
  userName:string =sessionStorage.getItem('name');

   status:boolean=false;
   blog:IBlog;
  title:string="";
  description:string="";
  type:string="";
  blogsFromActiveUser:IBlog={
    "title": "",
    "description": "",
    "type": "",
    "favourites": [],
    "authorId": null,
    "id": null
  };



  ngOnInit() {

   if(this.userId){this.blogsFromActiveUser.authorId=this.userId;}
   else{this._router.navigate(['/home'])}

  }

  updateBlog(name,desc,type){
    this.blogsFromActiveUser.title = name;
    this.blogsFromActiveUser.description = desc;
    this.blogsFromActiveUser.type = type;
    this.blog =this.blogsFromActiveUser;
    this._blogService.updateBlog(this.blog).subscribe();
    this.title="";
    this.description="";
    this.type="";
    this.status=false;
  }


  updateCalled(blog){
    this.title = blog.title;
    this.description = blog.description;
    this.type = blog.type;
    this.blogsFromActiveUser = blog;
    this.status =true;
  }
  deleteCalled(blog){
    this._blogService.deleteBlog(blog).subscribe();
  }

}
