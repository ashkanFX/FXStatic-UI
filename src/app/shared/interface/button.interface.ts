import {PrimeIcons} from "primeng/api";
import {ButtonIcon} from "../enums/public.enum";
import {Routing} from "./routing.interface";

export interface button {
  text: string,
  show: boolean
  icon?: PrimeIcons,
  iconStatus?: ButtonIcon
  router: Routing

  clicked($event?: any): void | any;
}
