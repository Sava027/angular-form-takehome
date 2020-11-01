import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferencesComponent } from './Components/preferences/preferences.component';
import { PreferenceService } from './services/preference.service';

@NgModule({
  declarations: [AppComponent, PreferencesComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [PreferenceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
