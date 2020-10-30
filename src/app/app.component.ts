import { Component, OnDestroy, OnInit } from '@angular/core';
// import {MediaChange, MediaObserver } from '@angular/flex-layout';
// import {  } from "@angular/flex-layout";
//  import { MediaChange } from '../media-change';
import {Router, Event, NavigationStart} from '@angular/router';
import { AuthService } from './../app/auth/auth.service';
import { MessageService } from './../app/components/message/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  deviceXs: boolean;
  activeMediaQuery = '';
  loading = true;

  // constructor(private mediaObserver: MediaObserver) {}
  ngOnInit() {
    console.log(' welocme ');
    // this.mediaSub = this.mediaObserver.asObservable().
    //   .subscribe(
    //     (result: MediaChange) => {
    //     console.log(result.mqAlias);
    //      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    //   }
    //   );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }


  get isLoggedIn(): boolean {
    return true; // this.authService.isLoggedIn;
  }

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
}
constructor(private authService: AuthService,
  private router: Router,
  private messageService: MessageService) {
router.events.subscribe((routerEvent: Event) => {
this.checkRouterEvent(routerEvent);
});
}
checkRouterEvent(routerEvent: Event): void {
  if (routerEvent instanceof NavigationStart) {
    this.loading = true;
  }

}
}
