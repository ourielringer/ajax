import { Component, OnInit } from '@angular/core';
import { SerAjaxService } from 'src/app/services/ser-ajax.service';


@Component({
  selector: 'app-com-ajax',
  templateUrl: './com-ajax.component.html',
  styleUrls: ['./com-ajax.component.css']
})
export class ComAjaxComponent implements OnInit {

  constructor(private serv:SerAjaxService) { }

  db = {}
  arrKey=[]
  
  


  ngOnInit(): void {
    for (let key in this.serv.ul){

      this.arrKey.push(key);
      console.log(this.arrKey);
      this.serv.httgPet(this.serv.ul[key]).subscribe(ajaxResult => this.db[key]= ajaxResult)
    }
    console.log(this.db);
  }
    
}
