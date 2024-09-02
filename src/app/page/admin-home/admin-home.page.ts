import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
