import {Routing} from "./routing.interface";
import {UserResDto} from "../../routes/admin/user/user.res.dto";
import {Category} from "../../routes/admin/category/Category";

export interface Card {
  id?: string;
  img?: any,
  title: string,
  subText?: string,
  router?: Routing
  description?: string,
  context?: string,
  isShow?: boolean;
  user?: UserResDto;
  categories?: Category[];
  haveProfile: boolean;

}
