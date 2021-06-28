import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  loadedFeature : string = 'recipe';

  ngOnInit(){
   
  }
  onNavigate(feature){
    this.loadedFeature = feature;
  }
}
