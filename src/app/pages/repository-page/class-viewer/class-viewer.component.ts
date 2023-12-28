import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  	selector: 'app-class-viewer',
  	templateUrl: './class-viewer.component.html'
})
export class ClassViewerComponent implements OnInit {

	constructor(protected sApi: ApiService, private route: ActivatedRoute) {}

	public ngOnInit(): void {
		const _id = this.route.snapshot.paramMap.get('id');
		this.sApi.getData(`classes/${_id}?populate=*`).subscribe({
			next: this.classLoadedCallback.bind(this),
			error: this.classLoadErrorCallback.bind(this)
		});
	}


	private classLoadedCallback(res: any): void {
		this.className = res.data.attributes.name;
		this.iconUrl = res.data.attributes.icon.data.attributes.url;
		this.bgUrl = res.data.attributes.bg.data.attributes.url;
		this.about = res.data.attributes.about;

		const _classDetails = res.data.attributes.class_detail.data.attributes;

		this.hitDie = _classDetails.hitDie;
		this.hpGain = _classDetails.hpGain;
		this.armorProf = _classDetails.armorProf;
		this.weaponProf = _classDetails.weaponProf;
		this.saveThrows = _classDetails.saveThrows;
		this.skills = _classDetails.skills;
		this.levelingTable = _classDetails.levelingTable;

		this.classLoaded = true;
		console.log(res);
	}

	private classLoadErrorCallback(err: any): void {
		console.error(err);
	}

	protected classLoaded: boolean = false;

	protected className: string = '';
	protected iconUrl: string = '';
	protected bgUrl: string = '';
	protected about: string = '';

	protected hitDie: number = 0;
	protected hpGain: number = 0;
	protected armorProf: string = '';
	protected weaponProf: string = '';
	protected saveThrows: string = '';
	protected skills: string = '';

	protected levelingTable: any;

}
