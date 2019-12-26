import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewComponent } from './components/new/new.component';
import { InnercompComponent } from './components/innercomp/innercomp.component';
import { ConnentService } from './connent.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NewComponent, InnercompComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConnentService]
})
export class AppModule { }
