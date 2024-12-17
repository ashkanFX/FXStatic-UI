import {Component, OnInit} from '@angular/core';
import Typed from "typed.js";
import {TypeEffectService} from "./type-effect.service";

@Component({
  selector: 'app-type-effect',
  standalone: true,
  imports: [],
  template: `
    <div class=" col-12 text-white text-4xl disableSelect " style="">
      <span id="element"></span>
    </div>
  `,
  styleUrl: './type-effect.component.css'
})


export class TypeEffectComponent implements OnInit  {
  constructor(private readonly typeEffectService: TypeEffectService) {}
  ngOnInit(): void {
    this.typeEffectService.state.subscribe({
      next: (res) => {
        const type = new Typed('#element', res)
      }
    })
  }




}
