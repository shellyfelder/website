import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { About } from './pages/about/about.component';
import { Home } from './pages/home/home.component';
import { Books } from './pages/books/books.component';
import { Art } from './pages/art/art.component';



@NgModule({
  declarations: [
    AppComponent,
    Home,
    Navbar,
    About,
    Books,
    Art
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
