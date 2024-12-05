import {button} from "./button.interface";
import {ReplaySubject} from "rxjs";

export class navBar {
  upDateNavBar: ReplaySubject<navBar>
  text?: string
  mark?: string
  textColor?: string
  leftButton?: button[]
  rightButton?: button[]

}
