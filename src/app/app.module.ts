import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { RouterModule } from '@angular/router';
import { AppErrorHandler } from './common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

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
import { CourseFormComponent } from './course-form/course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';

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
    SignupFormComponent,
    CourseFormComponent,
    FormBuilderComponent,
    PostsComponent,
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      // { path: 'followers/:id/:username', component: GithubProfileComponent },
      // { path: 'followers', component: GithubFollowersComponent },
      // { path: 'posts', component: PostsComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    // GithubFollowersService,
    // PostService,
    // { provide: ErrorHandler, useClass: AppErrorHandler },
    OrderService,
    AuthService,
    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
