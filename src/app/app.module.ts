import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RepositoryPageComponent } from './pages/repository-page/repository-page.component';
import { HeaderComponent } from './pages/repository-page/header/header.component';
import { LoreComponent } from './pages/repository-page/lore/lore.component';
import { ClassesComponent } from './pages/repository-page/classes/classes.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassViewerComponent } from './pages/repository-page/class-viewer/class-viewer.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		HeaderComponent,
		RepositoryPageComponent,
  		LoreComponent,
  		ClassesComponent,
    ClassViewerComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
