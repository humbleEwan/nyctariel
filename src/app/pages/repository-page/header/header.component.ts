import { Component, HostListener, OnInit } from '@angular/core';
import { routes } from 'src/app/tempData';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public ngOnInit(): void {
		this.routes = routes;
	}

	@HostListener('window:scroll', []) 
	public onWindowScroll(): void {
		this.isScrolled = window.scrollY > 100;
	}

	protected routes: Array<{name: string, link: string}> = [];
	protected isScrolled: boolean = false;
}
