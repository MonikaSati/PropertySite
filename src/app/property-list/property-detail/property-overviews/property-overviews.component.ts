import { Component, Input } from '@angular/core';
import { Property } from 'src/Models/Property';

@Component({
  selector: 'app-property-overviews',
  templateUrl: './property-overviews.component.html',
  styleUrls: ['./property-overviews.component.css']
})
export class PropertyOverviewsComponent {

  @Input()
  property: Property| undefined
  @Input()
  propertyage: string=""
  ngOnInit(){

  }
}
