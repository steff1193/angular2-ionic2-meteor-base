import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoDataService } from './demo/demo-data.service';
import { DemoComponent2 } from "./demo2/demo2.component";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DemoComponent,
    DemoComponent2
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'demo', component: DemoComponent },
      { path: 'demo2', component: DemoComponent2 }
    ])
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
