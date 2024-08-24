import {Routing} from "../interface/routing.interface";
import {AdminComponent} from "../../routes/admin/admin.component";
import {PostComponent} from "../../routes/admin/post/post.component";
import {ContentComponent} from "../../routes/base/content/content.component";
import {LoginComponent} from "../../routes/base/login/login.component";
import {BaseComponent} from "../../routes/base/base.component";

export abstract class rout {
  static Main: Routing = {
    url: '/main',
    component: BaseComponent
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
  static Login: Routing = {
    url: '/login',
    component: LoginComponent
  }
}
