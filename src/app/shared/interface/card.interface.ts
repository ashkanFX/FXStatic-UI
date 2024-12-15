import {Routing} from "./routing.interface";

export interface Card{
  img?: string,
  title?: string,
  subText?: string,
  router?: Routing
  description?: string,
  isShow?: boolean;
  haveProfile: boolean;
}
