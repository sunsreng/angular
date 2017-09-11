import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { SummaryPipe } from './custom-pipes/summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { HiddenComponent } from './hidden/hidden.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './course/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    PipesComponent,
    CustomPipesComponent,
    SummaryPipe,
    PanelComponent,
    NgIfComponent,
    HiddenComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
