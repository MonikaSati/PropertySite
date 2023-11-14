import { Images } from "./Image";

export interface Property{
   
    
  
    
//   "sellRent": 0,
//   "name": "trident",
//   "propertyTypeId": 6,
//   "bhk": 3,
//   "price": 1000,
//   "builtArea": 900,
//   "address": "trident embassy",
//   "furnishingTypeId": 5,
//   "cityId": 3,
//   "carpetAreat": null,
//   "floorNo": null,
//   "totalFloor": null,
//   "security": null,
//   "maintenance": null,
//   "gated": null,
//   "address2": null,
//   "readyToMove": true,
//   "possesionDate"
   id:number,
   name: string,
   description:string,
   propertytype:string,
   city: string,
   furnishing:string,
   price:number,
    sellRent: number,
    possesionDate: Date,
    readyToMove:boolean,
    builtArea:number,
    carpetAreat: null,
      floorNo: number
      totalFloor: number,
      security: number,
      maintenance: number,
      gated: number,
      address2: string,
      propertImages?:Images[]
      
}
export interface propwithid{
  $id: number,
  $values:Property[]
}
export interface imgs{
$id: number,
$values:Images[]
}
export interface Singleprop{
  $id:number,
  name: string,
  description:string,
  propertytype:string,
  city: string,
  furnishing:string,
  price:number,
   sellRent: number,
   possesionDate: Date,
   readyToMove:boolean,
   builtArea:number,
   carpetAreat: null,
     floorNo: number
     totalFloor: number,
     security: number,
     maintenance: number,
     gated: number,
     address2: string,
     propertImages?:imgs
}
export class Propertyclss{
 
            // public int SellRent { get; set; }
            // public string Name { get; set; }
            // public int PropertyTypeId { get; set; }
           
            // public int BHK { get; set; }
            // public int Price { get; set; }
            // public int BuiltArea { get; set; }
            
            // public string Address { get; set; }
    
            // public int FurnishingTypeId { get; set; }
       
            // public int CityId { get; set; }
          
           Name: string
  Id:number
    PropertyTypeId:string
    CityId: number=0;
    FurnishingTypeId:number=0
    Price:number=0
    SellRent: number=0
    PossesionDate: string
    ReadyToMove:boolean
    BuiltArea: number=0;
    Address: string="this is an address";
    BHK:number=0;
    PropertImages?:File[]
    
}