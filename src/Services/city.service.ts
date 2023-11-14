import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CityType, city } from "src/Models/city";
@Injectable({
    providedIn:"root"
})
export class CityService{
    constructor(private http: HttpClient){}

   baseurl="https://localhost:7110/api/City"
    getcities()
    {
     return   this.http.get<CityType>(this.baseurl)
    }
}