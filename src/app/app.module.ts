import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InterSpringBootComponent } from './inter-spring-boot/inter-spring-boot.component';
import { InteSpriService } from './inte-spri.service';

@NgModule({
  declarations: [
    AppComponent,
    InterSpringBootComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InteSpriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
