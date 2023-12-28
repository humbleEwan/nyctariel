import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RepositoryPageComponent } from './pages/repository-page/repository-page.component';
import { ClassesComponent } from './pages/repository-page/classes/classes.component';
import { LoreComponent } from './pages/repository-page/lore/lore.component';
import { ClassViewerComponent } from './pages/repository-page/class-viewer/class-viewer.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },

	{ path: 'repository', component: RepositoryPageComponent, children: [
		{ path: 'lore', component: LoreComponent },
		{ path: 'classes', component: ClassesComponent },

		{ path: 'class/:id', component: ClassViewerComponent }
	] }
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
