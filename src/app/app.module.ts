import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { ListComponent } from './list/list.component';
import { ListCardComponent } from './list/list-card/list-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [				
    AppComponent,
      HeaderComponent,
      InstrumentComponent,
      ListComponent,
      ListCardComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
