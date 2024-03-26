import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {TypedOptions} from "typed.js";

@Injectable({
  providedIn: 'root'
})
export class TypeEffectService {
  state =new  ReplaySubject<TypedOptions>();
  constructor() { }
}

