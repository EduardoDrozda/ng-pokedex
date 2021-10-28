import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
  @Output() endElementEmitter = new EventEmitter<void>();

  constructor() {}

  @HostListener('scroll', ['$event.target'])
  onEndDiv(event: any) {
    const isEndElement =
      event.offsetHeight + event.scrollTop >= event.scrollHeight;

    if (isEndElement) {
      this.endElementEmitter.emit();
    }
  }
}
