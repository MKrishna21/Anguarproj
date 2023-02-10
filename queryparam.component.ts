import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {
  queryparamdata='';
   querycity='';
   querycode=20;
  constructor(private activateroute:ActivatedRoute) {
    this.activateroute.queryParams.subscribe(data=>{
      this.queryparamdata=data.name;
      this.querycity=data.city;
      this.querycode=data.code;
     // console.log(data);
    }
      );
   }

  ngOnInit(): void {
  }

}
