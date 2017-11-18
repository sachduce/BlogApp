import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-list/blog-detail.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./Services/user.service";
import {BlogService} from "./Services/blog.service";
import {UserDetailComponent} from "./user-detail/user-detail.component"
import { BlogUserPipe } from './Pipes/blog-user.pipe';
import {FormsModule} from "@angular/forms";
import { FavouritesComponent } from './favourites/favourites.component';
import { BlogTitlePipe } from './Pipes/blog-title.pipe';
import { YourFavComponent } from './your-fav/your-fav.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';





const approutes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"home", component: BlogListComponent},
  {path:"user", component: UserComponent},
  {path:"blog/:id", component: BlogDetailComponent},
  {path:"loggedin", component: UserDetailComponent},
  {path:"favourites", component: YourFavComponent},
  {path:"addblog", component:CreateBlogComponent},
  {path:"**", component: BlogListComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    UserComponent,
    UserDetailComponent,
    BlogUserPipe,
    FavouritesComponent,
    BlogTitlePipe,
    YourFavComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),
    HttpClientModule
  ],
  providers: [UserService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
