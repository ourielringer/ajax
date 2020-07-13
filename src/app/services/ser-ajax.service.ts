import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SerAjaxService {

 ul = { "html":"https://raw.githubusercontent.com/bresleveloper/db/master/ajax/comp-calc.html",
        "json":"https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json",
        "txt":"https://raw.githubusercontent.com/bresleveloper/db/master/ajax/say%20ho.txt",
        "js":"https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.js"
}

  constructor(private http:HttpClient) { }


  httgPet(url:string):Observable<string> {
    return this.http.get<string>(url,{responseType:"text"})
  }
}
