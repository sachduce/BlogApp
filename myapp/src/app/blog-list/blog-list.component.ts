import { Component, OnInit, ViewEncapsulation,Input,Output,EventEmitter} from '@angular/core';
import {BlogService} from "../Services/blog.service";
import {IBlog} from "../Interface/IBlog"
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogListComponent implements OnInit {
  constructor(private _blog: BlogService) { }
  @Input() userId=0;
  category:string[]=[];
  @Output() update: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() delete:EventEmitter<Object> = new EventEmitter<Object>();
  blogs:IBlog[]=[];
  listFilter:string="";
  ngOnInit() {
    this._blog.getBlogs().subscribe(blog=>{this.blogs= blog;
    this.blogs.forEach(b=>
    {
      if(!this.category.includes(b.type)){
        this.category.push(b.type);
      }
    })
    });
  }


  favClick(userId,blog:IBlog){
    if(blog.favourites.includes(userId)){
      blog.favourites.splice(blog.favourites.indexOf(userId),1);
    }
    else{
      blog.favourites.push(userId);
    }
    this._blog.updateBlog(blog).subscribe();
  }
  updateClick(blog){
    this.update.emit(blog);
  }
  deleteClick(blog){
    this.blogs= this.blogs.filter(b=>b.id != blog.id);
    this.delete.emit(blog);
  }
  onSet(type){
    this.listFilter=type;
  }
}
