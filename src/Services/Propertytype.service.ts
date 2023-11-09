import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PropertyType } from "src/Models/Properttype";
@Injectable({
    providedIn:"root"
})
export class PropertytypeService{
    constructor(private http: HttpClient){}
     baseurl="https://localhost:7110/Proprtytype"

    getPropertytypes(){
      return  this.http.get<PropertyType[]>(this.baseurl)
    }

}