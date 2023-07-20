import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../app.component.css']
})
export class Navbar {
  title = 'Navbar';
  pageTitle = "Home";


  changePage(page:any) {
    this.pageTitle = page;
  }

}
