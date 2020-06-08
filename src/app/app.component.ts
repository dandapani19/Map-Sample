import { Component,OnInit } from '@angular/core';
import { BackendApiService } from "./backend-api.service";
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import * as io from 'socket.io-client';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	markers =[];
	Users =[];
	title = 'Angular-Map';
	lan: number = 11.9418994;
	lon: number = 79.793706;
	zoom: number = 10;
	constructor(
		public api: BackendApiService,
		public router: Router,
	  ){}
	  ngOnInit(){
		this.setupSocketConnection();
		setInterval(() => {this.CabList()}, 3000)
		setInterval(() => {this.UserList()}, 3000)
		// this.CabList();
		// this.UserList();
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

	  UserList(){
		console.log('----------user.data')
			this.api.GetUser().subscribe(data=>{
				if(data){
				  console.log('----user------.data',data)
				  this.Users= data.data;
				}
			  }),
			  err =>console.log(err)		
	  }


	  setupSocketConnection() {
		let socket = io(environment.apiUrl);
		socket.on('connect', function(data){
		  console.log('connected to server')
		});
		socket.on('newclientconnect',function(data) {
		 console.log(data.description);
	   });
	   socket.on('broadcast',function(data) {
		console.log(data);
	  });
	   socket.emit('join', 'Hello World from client');
		  
	  }
  
}
