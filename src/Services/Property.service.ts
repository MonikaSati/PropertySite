import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Property, Singleprop, propwithid } from "../Models/Property";

@Injectable({
    providedIn:"root"
})
export class PropertyService{
    eventp=new EventEmitter<any>()
    constructor(private http:HttpClient){}
    getPropertylist(){
        const headeroption={ headers:  new HttpHeaders({
            Authorization: "Bearer " + JSON.parse(localStorage.getItem('User'))
            
        })}
    return this.http.get<propwithid>('https://localhost:7110/api/Property',headeroption)
    }

    getProperty(id: number){
       return this.http.get<Singleprop>(`https://localhost:7110/api/Property/${id}`)
    }
    addProperty(data: any){
        console.log("data from service", data)
        const headeroption={ headers:  new HttpHeaders({
            Authorization: "Bearer " + JSON.parse(localStorage.getItem('User'))
            
        })}
     
        return this.http.post("https://localhost:7110/api/Property/add",data,headeroption).subscribe((value)=>{
            console.log("post request")
            console.log(value)
        })
    }
    setPrimaryImage(prid: number, imgname: string){
        const header=  { headers: new HttpHeaders({
            Authorization: "Bearer " + JSON.parse(localStorage.getItem('User'))
        })}
     return this.http.post("https://localhost:7110/api/Property/setpImage/" + prid+ "/"+imgname,{},header  )
   
    }
    uploadimage(id: number, files: File[]){
       
        const formdata= new FormData()
        for(let i=0; i<files.length; i++){
            formdata.append("file", files[i], files[i].name)
           
        }
        const header={
             headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("User"))
             })
        }
  
       
  
            return this.http.post("https://localhost:7110/api/Property/Upload/" + id, formdata,header)
    }
    deletepic(id:number,image: string){
        const header={
            headers: new HttpHeaders({
       Authorization: "Bearer " + JSON.parse(localStorage.getItem("User"))
            })
       }
       return this.http.post("https://localhost:7110/api/Property/PicDelete/" +id +"/"+image,{},header)
    }
}