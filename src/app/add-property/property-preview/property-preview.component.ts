import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-preview',
  templateUrl: './property-preview.component.html',
  styleUrls: ['./property-preview.component.css']
})
export class PropertyPreviewComponent {


  @Input()
  Bhk: number 
  @Input()
  properttype
  @Input()
  city
  @Input()
  furnish
  @Input()
  propname
  @Input()
  area
  @Input()
  rent
  @Input()
  readytomove
  @Input()
  pdate

}
