import { Component } from '@angular/core';
import { AgmInfoWindow } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Map App';
  lat: number = 22.0574;
  lng: number = 78.9382;
  zoom:number = 5;
  markers = [
    { lat: 28.7041, lng: 77.1025 },
    { lat: 19.0760, lng: 72.8777 },
    { lat: 12.9716, lng: 77.5946 },
    { lat: 22.5726, lng: 88.3639 },
    { lat: 13.0827, lng: 80.2707 },
    { lat: 17.3850, lng: 78.4867 },
    { lat: 27.1767, lng: 78.0081 },
    { lat: 30.7333, lng: 76.7794 },
    { lat: 25.5941, lng: 85.1376 },
    { lat: 26.9124, lng: 75.7873 }
  ];
  previousWindow:AgmInfoWindow = null;

  clickMarker(infoWindow:AgmInfoWindow){    
    if (this.previousWindow) {      
      this.previousWindow.close();
    }
    this.previousWindow = infoWindow;
  }
}
