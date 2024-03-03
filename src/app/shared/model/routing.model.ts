import {Routing} from "../interface/routing.interface";
import {MainComponent} from "../../layout/mianPage/main/main.component";
import {ContentComponent} from "../component/content/content.component";

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
}
