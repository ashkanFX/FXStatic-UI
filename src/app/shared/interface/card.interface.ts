import {Routing} from "./routing.interface";

export interface Card{
  img ?:string,
  text ?: string,
  subText ?:string,
  router?: Routing
  description?:string,
  isShow ?: boolean;
}
