import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlogService} from "../Services/blog.service";
import {IBlog} from "../Interface/IBlog";
import {Router} from "@angular/router";
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateBlogComponent implements OnInit {

  constructor(private _blogService:BlogService,private _router:Router) { }
  title:string="";
  description:string="";
  type:string="";
  blog:IBlog={
    "title": "",
    "description": "",
    "type": "",
    "favourites": [],
    "authorId": null,
    "id": null
  };
  userId:number = +sessionStorage.getItem('id');
  ngOnInit(){
    if(!this.userId){
      this._router.navigate(['/home']);
    }
  }
  submitForm(title,desc,type){
    this.blog.title=title;
    this.blog.description=desc;
    this.blog.authorId =this.userId;
    this.blog.type=type
    this._blogService.postBlog(this.blog).subscribe();
    alert("Blog added successfully")
    this.title="";
    this.description="";
    this.type="";
    //this._router.navigate(['/loggedin']);
  }

}
