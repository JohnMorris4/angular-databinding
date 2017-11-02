import { Component,
   OnChanges, 
   OnInit, 
   SimpleChanges,
   DoCheck, 
   AfterContentInit, 
   AfterContentChecked,
   Input, 
   ViewEncapsulation,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy,
   ViewChild,
   ElementRef
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements
 OnInit, OnChanges, DoCheck, 
 AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy  {
 @Input('srvElement') element: {type: string, name: string, content: string};
@Input () name: string;
@ViewChild('heading') header: ElementRef;
  constructor() { 
    console.log('Constructor Called');
   }

   ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Called');
    console.log(changes);
   }

  ngOnInit() {
    console.log('ngOnInit Called');
    console.log('Content'+ this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('check');
  }

  ngAfterContentInit(){
    console.log('AfterContentInit');
    console.log('Content'+this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}
