import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root',
})
export class ApiService {

  	constructor(private http: HttpClient) {}
	
	public getData(collection: string): Observable<any> {
		return this.http.get(this.apiUrl + `/api/${collection}`).pipe();
	}

	public apiUrl: string = 'http://localhost:1337'

}
