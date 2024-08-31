import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserSettingsDropdownComponent } from './components/user-settings-dropdown/user-settings-dropdown.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreateNewDropdownComponent } from './components/navigation/components/create-new-dropdown/create-new-dropdown.component';
import { TrashComponent } from './pages/trash/trash.component';
import { SharedWithMeComponent } from './pages/shared-with-me/shared-with-me.component';
import { SharedByMeComponent } from './pages/shared-by-me/shared-by-me.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { FilesComponent } from './components/files/files.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserSettingsDropdownComponent,
    SearchFormComponent,
    NavigationComponent,
    DashboardComponent,    
    CreateNewDropdownComponent,
    TrashComponent,
    NavigationComponent,
    SharedWithMeComponent,
    SharedByMeComponent,
    ProfileComponent,
    ModalComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    FilesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
