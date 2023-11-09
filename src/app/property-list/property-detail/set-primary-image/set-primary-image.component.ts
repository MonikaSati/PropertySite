import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Images } from 'src/Models/Image';
import { Property } from 'src/Models/Property';
import { PropertyService } from 'src/Services/Property.service';

@Component({
  selector: 'app-set-primary-image',
  templateUrl: './set-primary-image.component.html',
  styleUrls: ['./set-primary-image.component.css']
})
export class SetPrimaryImageComponent {
  constructor(private proprtyservice: PropertyService, private activeroute: ActivatedRoute){}
@Input()
property: Property
@Input()
uploadedimage
pId
@Output() primeimage= new EventEmitter<any>()
ngOnInit(){
this.pId=  this.activeroute.snapshot.paramMap.get("id")
  //console.log("set-p",this.property)
}
delete(data: string){
  const part= data.split("/")
  const imagename= part[part.length-1]
this.proprtyservice.deletepic(this.pId, imagename).subscribe(result=>{
  this.proprtyservice.getProperty(this.pId).subscribe((result)=>{
    this.property= result;
  })
})
}
setmain(img: any){
  //console.log("from img",typeof this.property.propertImages, img)
  // let data: object={
  //   propertyId: this.property.id,
  //   imagename:img
  // }
  //console.log("img",img.image)
const imag=img.image
  const part= imag.split('/')
  const imgname= part[part.length-1]
  //console.log("part",part)
  //console.log("imgname",imgname)
this.proprtyservice.setPrimaryImage(this.pId, imgname).subscribe(()=>{
  this.primeimage.emit(img)
})

}
}
