import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

xdescribe('HighlightDirective', () => {
  it('should create an instance', () => {
    const element: ElementRef = null;
    const directive = new HighlightDirective(element);
    expect(directive).toBeTruthy();
  });
});
