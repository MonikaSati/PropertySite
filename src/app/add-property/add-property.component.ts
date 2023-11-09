import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PropertyType } from 'src/Models/Properttype';
import { Property, Propertyclss } from 'src/Models/Property';
import { city } from 'src/Models/city';
import { Furnish } from 'src/Models/furnishingtype';
import { FurnishService } from 'src/Services/Furnishtype.service';
import { PropertyService } from 'src/Services/Property.service';
import { PropertytypeService } from 'src/Services/Propertytype.service';
import { CityService } from 'src/Services/city.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  ps: Propertyclss = new Propertyclss()
property: Property| undefined
propertytype: PropertyType[]| undefined
furnishingtype: Furnish[]| undefined
city: city[] |undefined
bhk=[1,2,3,4]
proptype: string
cityname:string
furnish:string
propname: string
rent:number
area: number
readytomove:number
constructor(private propertyservice: PropertyService, private ptype: PropertytypeService,
  private fservice: FurnishService,
  private cityservice: CityService){}
  // default:city={
  //   id:1,
  //   name:"Brussels"
  // }
  navitem: string="default";
default: string
propertyform: FormGroup 
ngOnInit(){
  this.ptype.getPropertytypes().subscribe((data)=>{
    this.propertytype= data;
  })
  this.fservice.getFurnishlist().subscribe((data)=>{
    this.furnishingtype=data
  })
  this.cityservice.getcities().subscribe((data)=>{
    this.city= data;
   this.default= data[0].name
    this.propertyform.get('city').setValue(this.default)
    
  })
  this.propertyform= new FormGroup({
    sellrent: new FormControl(),
    bhks: new FormControl(),
    prptype: new FormControl(),
    furnishtype: new FormControl(),
    city: new FormControl(),
    propertyname: new FormControl(),
    Rent: new FormControl(),
    Security: new FormControl(),
    Maintenance: new FormControl(),
    BuiltArea: new FormControl(),
    CarpetArea:new FormControl(),
    readymove: new FormControl(),
    gated: new FormControl(),
    mainentrance:new FormControl(),
    possesiondate:new FormControl(),
   // propertImages: new FormControl()
    
  
  })

}
datePickerConfig={};
defaults(){
this.navitem="default"
}
price(){
  this.navitem='price'
}
Address(){
  this.navitem="Address"
}
photo(){
  this.navitem="photo"
}
order(){
  this.navitem='order'
}
onclick(value: any){
  
this.proptype= value
}
oncityclick(value: any){
  console.log(value)
  this.cityname=value
}
textinput(value: any){
  this.propname= value.target.value
}
furnichclick(value: any){
this.furnish= value
}
basictonext(){
  this.navitem='price'
}
rentinput(value:any){
this.rent= value.target.value
}
areainput(value: any)
{
  this.area= value.target.value
}

  onsubmit(value: any){
  console.log(this.propertyform.value)
   if(this.propertyform.value.city=="Brussels")
   {
    this.propertyform.get('city').setValue(1)
   }
   console.log( typeof this.propertyform.get('readymove').value)
   console.log(this.ps)
   this.ps.Name =this.propertyform.get('propertyname').value
   this.ps.CityId= this.propertyform.get('city').value
   this.ps.FurnishingTypeId= this.propertyform.get('furnishtype').value
   this.ps.PropertyTypeId=this.propertyform.get('prptype').value
   this.ps.Price= this.propertyform.get('Rent').value
     this.ps.ReadyToMove= JSON.parse((this.propertyform.get('readymove').value).toLowerCase())
     this.ps.SellRent= this.propertyform.get('sellrent').value
    // this.ps.propertImages= this.propertyform.get('propertImages').value
     if(this.propertyform.get('possesiondate').value)
     {
      this.ps.PossesionDate= this.propertyform.get('possesiondate').value
     }
     else{
      this.ps.PossesionDate=new Date(Date.now())
     }
    
     this.ps.BuiltArea= this.propertyform.get('BuiltArea').value
console.log(this.ps)
this.propertyservice.addProperty(this.ps)
  }


}
