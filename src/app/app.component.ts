import { Component,OnInit } from '@angular/core';
import { BackendApiService } from "./backend-api.service";
import { Router } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    markers =[];
	constructor(
		public api: BackendApiService,
		public router: Router,

	  ){}
	  ngOnInit(){
		setInterval(() => {this.CabList()}, 3000)
	  }
	  CabList(){
		console.log('----------.data')
			this.api.GetCabList().subscribe(data=>{
				if(data){
				  console.log('----------.data',data)
				  this.markers= data.data;
				}
			  }),
			  err =>console.log(err)		
	  }
  title = 'Angular-Map';
  lan: number = 11.9418994;
  lon: number = 79.793706;
  zoom: number = 10;

}
