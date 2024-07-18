import {Routing} from "../interface/routing.interface";
import {MainComponent} from "../../routes/mianPage/main/main.component";
import {ContentComponent} from "../../routes/content/content.component";
import {AdminComponent} from "../../routes/admin/admin.component";
import {PostComponent} from "../../routes/admin/post/post.component";

export abstract class rout {
  static Main: Routing = {
    url: '/main',
    component: MainComponent
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
}
