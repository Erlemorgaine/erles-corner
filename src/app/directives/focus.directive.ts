import {AfterViewInit, Directive, ElementRef, Input,} from '@angular/core';

@Directive({
  selector: '[inputFocus]',
})
export class FocusDirective implements AfterViewInit {

  @Input() public focused: boolean = false;

  constructor(public element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (this.focused) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }
}
