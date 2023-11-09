import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/Models/Property';
import { PropertyService } from 'src/Services/Property.service';
import{Images} from "src/Models/Image"
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent {
constructor(private activateroute: ActivatedRoute, private propertyservice: PropertyService){}
property: Property| undefined 
overviewstatus='default';
sellrent:number|undefined
id: any
uploadedimage
propertyage: string=''
images: Images[]
primaryimage
propertImages: File[]
ngOnInit(){
  this.activateroute.paramMap.subscribe((data)=>{
this.id= data.get('id')
this.propertyservice.getProperty(this.id).subscribe((data)=>{
  this.property= data;
  this.images= this.property.propertImages
  let filterdimages= this.images.filter((img)=>img.isprimary==true)
  if(filterdimages)
  {
    this.primaryimage= filterdimages[0]
  }
  console.log(this.primaryimage.image)
  this.propertyage=this.calculateage(this.property.possesionDate)
})

  })
  this.propertyservice.eventp.subscribe((data)=>{
    this.primaryimage= data
  })
}
setprimpic(data: any){
  //console.log("pimg",data)
this.primaryimage= data;
console.log(this.primaryimage)
}
overview(){
this.overviewstatus= 'default';
console.log(this.overviewstatus)
}
Address(){
  this.overviewstatus='Address'
}
picture(){
  this.overviewstatus="photo"
}
upload(){
  this.overviewstatus="Upload"
}
onphotoupload(data: any){
//conso?*e.log("data
this.propertImages= data.target.files as File[]
this.propertyservice.uploadimage( this.id, this.propertImages).subscribe((result)=>{
  console.log(result)
  this.propertyservice.getProperty(this.id).subscribe((result)=>{
    this.property= result
  })
  
})
}
calculateage(estdate: Date){
  let today= new Date();
  let establishdate= new Date(estdate)
  let estyear= establishdate.getFullYear();
  let todayyear= today.getFullYear();
let ageyear= todayyear - estyear;
let agemonth= today.getMonth()- establishdate.getMonth()
if(agemonth < 0 || (agemonth==0 && today.getDate()< establishdate.getDate())){
 ageyear--
}
if(ageyear==0)
{
  return "Less than a year"
}
if(today< establishdate)
{
  return "Comming Soon"
}
return ageyear.toString()+ "  Years";
  //console.log(today,"year==",todayyear)


}
}
