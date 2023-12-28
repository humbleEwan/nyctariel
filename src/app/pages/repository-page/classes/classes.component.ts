import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  	selector: 'app-classes',
  	templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {

	constructor(protected sApi: ApiService) {}

	public ngOnInit(): void {
		this.sApi.getData('classes?populate=icon').subscribe({
			next: this.classesLoadedCallback.bind(this),
			error: this.errorCallback.bind(this)
		});
	}

	private classesLoadedCallback(res: any): void {
		this.classList = res.data;
		this.classesLoaded = true;
		console.log(res);
	}

	private errorCallback(err: any): void {
		console.error(err);
		this.classesLoaded = true;
	}

	protected classesLoaded: boolean = false;
	protected classList: Array<any> = [];

}
