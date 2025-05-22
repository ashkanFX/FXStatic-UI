import {Routing} from "../interface/routing.interface";
import {AdminComponent} from "../../routes/admin/admin.component";
import {PostComponent} from "../../routes/admin/post/post.component";

import {UserComponent} from "../../routes/admin/user/user.component";
import {ContentComponent} from "../../routes/layout/content/content.component";
import {LayoutComponent} from "../../routes/layout/layout.component";
import {LoginComponent} from "../../routes/layout/login/login.component";
import {CommentComponent} from "../../routes/admin/comment/comment.component";

export abstract class rout {
  static Main: Routing = {
    url: '/main',
    component: LayoutComponent
  }
  static Home: Routing = {
    url: '/main/',
    component: ContentComponent
  }
  static Content: Routing = {
    url: '/main/content',
    component: ContentComponent
  }
  static admin: Routing = {
    url: '/admin',
    component: AdminComponent
  }
  static Post: Routing = {
    url: '/admin/post',
    component: PostComponent
  }
  static Category: Routing = {
    url: '/admin/category',
    component: PostComponent
  }
  static Comment: Routing = {
    url: '/admin/comment',
    component: CommentComponent
  }
  static User: Routing = {
    url: '/admin/user',
    component: UserComponent
  }
  static Login: Routing = {
    url: '/login',
    component: LoginComponent
  }

}
