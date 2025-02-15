import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appContentHolder]',
  standalone: true
})
export class ContentHolderDirective implements OnInit {
  @Input() appFlexClass: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  class = 'bg-4-color border-round-3xl border-2-color shadow-5 text-black-alpha-90'

  ngOnInit(): void {
    const classes = this.class.split(' ')
    classes.forEach(classStyle => {
      this.renderer.addClass(this.el.nativeElement, classStyle);
    })
    if (this.appFlexClass) {
      this.renderer.addClass(this.el.nativeElement, this.appFlexClass);
    } else {
      this.renderer.addClass(this.el.nativeElement, 'col-12');
    }
  }
}
