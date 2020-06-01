import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Map';
  lat: number = 11.9418994;
  lng: number = 79.793706;
  zoom: number = 10;
  markers = [
	  {
		  lat: 11.9418994,
		  lng: 79.7768908,
		  label: 'c1',
		  // draggable: true
	  },
	  {
		  lat:11.919737,
		  lng: 79.796959,
		  label: 'c2',
		  // draggable: false
	  },
	  {
		  lat: 11.9300683,
		  lng: 79.8087788,
		  label: 'c3',
		  // draggable: true
    },
    {
		  lat: 11.9500683,
		  lng: 79.8007788,
		  label: 'c4',
		  // draggable: true
    },
    {
		  lat: 11.9400683,
		  lng: 79.7087788,
		  label: 'c5',
		  // draggable: true
	  },
  ]
}
