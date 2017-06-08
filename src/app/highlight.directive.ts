import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit {

  //定義外部呼叫的別名(不一定需要)，若有定義別名，則外部使用只能呼叫別名。
  @Input('hoverColor') highlightColor: string;

  // 定義別名若等同於 Selector 的話，可直接套用該 Directive，並直接給予屬性值
  @Input('myHighlight') defaultColor: string;

  // 正常使用方式
  @Input() clickColor: string;

  constructor(private el: ElementRef) {
    //this.highlight(this.defaultColor); //寫在建構子會有載入一開始無套用defaultColor的問題，須改在 ngOnInit 套用。
  }

  ngOnInit(): void {
    this.highlight(this.defaultColor);
  }

  //定義滑鼠點下事件
  @HostListener('click') onClick() {
    this.highlight(this.clickColor || this.defaultColor);
  }

  //定義滑鼠進入事件
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }

  //定義滑鼠離開事件
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor);
  }

  //改變顏色函數
  highlight(colorName: string) {
    this.el.nativeElement.style.backgroundColor = colorName;
  }
}
