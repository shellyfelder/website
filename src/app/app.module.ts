import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { About } from './pages/about/about.component';
import { Home } from './pages/home/home.component';
import { Books } from './pages/books/books.component';
import { Art } from './pages/art/art.component';
import { FAQ } from './pages/faq/faq.component';
import { Contact } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    Home,
    Navbar,
    About,
    Books,
    Art,
    FAQ, 
    Contact
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//ng build --prod --base-href "https://shellyfelder.github.io/website/"
//npx angular-cli-ghpages --dir=dist/my-app