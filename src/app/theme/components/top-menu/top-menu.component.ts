import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data, AppService } from '../../../app.service';
import { Settings, AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html'
})
export class TopMenuComponent implements OnInit {
  public currencies = ['USD', 'EUR'];
  public currency:any;
  public flags = [
    { name:'English', image: 'assets/images/flags/gb.svg' },
    { name:'German', image: 'assets/images/flags/de.svg' },
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Russian', image: 'assets/images/flags/ru.svg' },
    { name:'Turkish', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;

  public settings: Settings;
  constructor(public appSettings:AppSettings, public appService:AppService , private router :Router) { 
    this.settings = this.appSettings.settings; 
  } 
  ngOnInit() {
    this.currency = this.currencies[0];
    this.flag = this.flags[0];    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/')
  }
}
