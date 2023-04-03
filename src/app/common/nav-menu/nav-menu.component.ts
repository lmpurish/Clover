import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  showMe: boolean = true;
  hiddenMe: boolean = true;
  langs: string[] = [];
 

  isExpanded = false;


  constructor(private translateServices: TranslateService){
    this.langs = this.translateServices.getLangs();
  }

  collapse() {
    this.isExpanded = false;
  }

 
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  changeFlag()  {
    this.showMe = !this.showMe;

    if(this.showMe){
      this.translateServices.use("English");
    }
    else{
      this.translateServices.use('Español');
    }
  }

  hiddenLogo() {
    this.hiddenMe = !this.hiddenMe;
  }

}
