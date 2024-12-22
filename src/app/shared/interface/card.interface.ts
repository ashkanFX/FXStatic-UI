import {Routing} from "./routing.interface";
import {UserResDto} from "../../routes/admin/user/user.res.dto";

export interface Card {
  id?: string;
  img?: string,
  title?: string,
  subText?: string,
  router?: Routing
  description?: string,
  context?: string,
  isShow?: boolean;
  user?: UserResDto;
  haveProfile: boolean;

}
