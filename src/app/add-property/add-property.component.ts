import { DatePipe, JsonPipe } from '@angular/common';
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
propertytype: any
furnishingtype: Furnish[]| undefined
city: city[] |undefined
bhk=[1,2,3,4]
fileinput:any
proptype: string
cityname:string
furnish:string
propname: string
rent:number
area: number
readytomove:number
imagepr
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
    this.propertytype= data.$values;
  })
  this.fservice.getFurnishlist().subscribe((data)=>{
    this.furnishingtype=data.$values
  })
  this.cityservice.getcities().subscribe((data)=>{
    this.city= data.$values;
   this.default= this.city[0].name
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
   propertImages: new FormControl()
    
  
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
onfilechange(data: any){
  this.fileinput = data.target;
  const file= data.target.files[0]
  console.log(file)
 
    const reader= new FileReader()
    reader.onload=(e)=>{
this.imagepr= e.target?.result as string
console.log(this.imagepr)}
reader.readAsDataURL(file);
  

  //console.log(this.fileinput.value)
//   const file = (data.target as HTMLInputElement).files[0];
//   console.log(file)
// const image = (data.target).files as File
// //this.propertyForm.get('image').setValue(file);
// console.log(image.name)
// this.propertyform.patchValue({ propertImages: file}); 
// //this.propertyform.get('propertImages').setValue(image)
// console.log("propertyimage",this.propertyform.get('propertImages').value)
// }
}
  onsubmit(value: any){
    
  console.log(this.propertyform.value)
   if(this.propertyform.value.city=="Brussels")
   {
    this.propertyform.get('city').setValue(1)
   }
  //  console.log( typeof this.propertyform.get('readymove').value)
  //  console.log(this.
   this.ps.Name =this.propertyform.get('propertyname').value
   this.ps.CityId= this.propertyform.get('city').value
   this.ps.FurnishingTypeId= this.propertyform.get('furnishtype').value
   this.ps.PropertyTypeId=this.propertyform.get('prptype').value
   this.ps.Price= this.propertyform.get('Rent').value
     this.ps.ReadyToMove= JSON.parse((this.propertyform.get('readymove').value).toLowerCase())
     this.ps.SellRent= this.propertyform.get('sellrent').value
     this.ps.BHK= this.propertyform.get('bhks').value
     //this.ps.PropertImages= this.propertyform.get('propertImages').value
     this.ps.Address="my address"
   
     if(this.propertyform.get('possesiondate').value)
     {
      this.ps.PossesionDate= this.propertyform.get('possesiondate').value.toISOString();
     }
     else{
    const date=new Date(Date.now())
    const datePipe = new DatePipe('en-US');
const formattedDate = datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ss');
const d= new Date(formattedDate)
this.ps.PossesionDate= formattedDate
    // const newdate= date.toISOString()
    // console.log(newdate)
    //this.ps.PossesionDate= 
      //this.ps.PossesionDate= this.ps.PossesionDate.toISOString();
     }
    
     this.ps.BuiltArea= this.propertyform.get('BuiltArea').value
     const formData = new FormData();
//      formData.append('Address', this.ps.Address);
// formData.append('Name', this.ps.Name);
// formData.append("Price", this.ps.Price.toString());
// formData.append('CityId', this.ps.CityId.toString());
// formData.append("BHK", this.ps.BHK.toString())
// formData.append("sell/rent", this.ps.SellRent.toString())
// formData.append("PropertytypeId", this.ps.PropertyTypeId.toString())
// formData.append("furnishingTypeId", this.ps.FurnishingTypeId.toString())
    // formData.append('propertyData', JSON.stringify(this.ps));

    for (const key of Object.keys(this.ps)) {
      formData.append(key, this.ps[key].toString());
    }
    
     if (this.fileinput && this.fileinput.files.length > 0) {
      formData.append('PropertImages', this.fileinput.files[0]);
    }

     //formData.append("PropertImage", )
console.log("this.ps",this.ps)

formData.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
this.propertyservice.addProperty(formData)
  }


}
