import { Component, OnInit, ViewContainerRef, Injector, ApplicationRef, ComponentFactoryResolver, AfterContentInit, OnDestroy, ComponentRef } from '@angular/core';
import { DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { Overlay,OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-overlaystudy',
  templateUrl: './overlaystudy.component.html',
  styleUrls: ['./overlaystudy.component.scss']
})
export class OverlaystudyComponent implements OnInit {
  ref:ComponentRef<ShowedComponent>;
  overlayRef;
  constructor(private vcr:ViewContainerRef,
      private injector:Injector,
      private appRef:ApplicationRef,
      private resolver:ComponentFactoryResolver,
      private overlay:Overlay
    ) { }
  show(): void {


      let container =  document.createElement('div');
      container.classList.add('myContainer');
      document.body.appendChild(container);
      const domOutlet = new DomPortalOutlet(container,this.resolver,this.appRef,this.injector);
      const componentPortal = new ComponentPortal(ShowedComponent);
      const componentRef = domOutlet.attach(componentPortal);
      this.ref=componentRef;
      //componentRef.changeDetectorRef.detectChanges();
      (componentRef.instance as ShowedComponent).name="邱晟";
      (componentRef.instance as ShowedComponent).close=()=>{
        console.log('我是你爸爸');
      }
  }

  show2(): void {


    this.overlayRef = this.overlay.create();
    const componentRef = this.overlayRef.attach(new ComponentPortal(ShowedComponent));
    this.ref=componentRef;
    //componentRef.changeDetectorRef.detectChanges();
    (componentRef.instance as ShowedComponent).name="邱晟2";
    (componentRef.instance as ShowedComponent).close=()=>{
      console.log('我是你爸爸2');
    }
}

  ngOnInit() {
  }
  destory(){
    this.ref.destroy();
  }

}

@Component({
  selector: 'app-show',
  template: `
    <div>{{name}}</div>
    <div (click)='close()'>关闭</div>
  `,
})
export class ShowedComponent implements OnInit,OnDestroy {
  name
  close=()=>{};
  constructor(private vcr:ViewContainerRef,
      private injector:Injector,
      private appRef:ApplicationRef,
      private resolver:ComponentFactoryResolver,
    ) { }
  ngOnDestroy(): void {
    console.log('destroy');
  }

   ngOnInit() {
     console.log('init',this.vcr);
   }

}
