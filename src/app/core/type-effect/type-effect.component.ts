import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import Typed from 'typed.js';
import {TypeEffectService} from './type-effect.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-type-effect',
  standalone: true,
  imports: [],
  template: `
    <div class="col-12 text-white text-4xl p-0 disableSelect">
      <span class="typed-element" id="element"></span>
    </div>
  `,
  styleUrl: './type-effect.component.css'
})
export class TypeEffectComponent implements AfterViewInit {
  constructor(
    private readonly typeEffectService: TypeEffectService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.typeEffectService.state.subscribe({
        next: (res) => {
          new Typed('#element', res);
        }
      });
    }
  }
}
