import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Furnish } from "src/Models/furnishingtype";

@Injectable({
    providedIn:"root"
})
export class FurnishService{
    constructor(private http: HttpClient){}

baseurl="https://localhost:7110/FurnishType"
    getFurnishlist(){
       return this.http.get<Furnish[]>(this.baseurl)
    }
}