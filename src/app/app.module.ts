import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhrasesComponent } from './core/pages/phrases/phrases.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PhrasesComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
