import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FieldTasksComponent } from './field-tasks/field-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginUserComponent } from './login-user/login-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

const appRoutes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'todo', component: FieldTasksComponent, },
  { path: 'edit', component: EditUserComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    FieldTasksComponent,
    LoginUserComponent,
    EditUserComponent,
    NotFoundComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
