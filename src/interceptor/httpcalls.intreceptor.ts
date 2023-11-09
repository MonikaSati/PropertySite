import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, concatMap, count, observable, of, retry, retryWhen, throwError } from "rxjs";


export class httpcallinterceptor implements HttpInterceptor{
intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
   console.log("hello from interceptor");
 return next.handle(req)
//pipe(
//     // retry({ delay: (errors: Observable<any>) => { return errors.pipe(
//     //     concatMap((error:HttpErrorResponse,count:number  )=>{
//     //      if(error.status===0 && count<5){
//     //         console.log("from try when")
//     //      return of(error)}
//     //      console.log("2nd try when")
//     //      return throwError(error.error)
//     //     })}))
//  retry({delay:(errors: Observable<any>)=>{
//     return errors.pipe((er: HttpErrorResponse, count : number)=>{

//     };
//     ))
//  }
// })
//     catchError((error: HttpErrorResponse)=>{  
    //     console.log(error)  
    //     return throwError(error.error)
    // }


    // )32224eyhgbn Aa

   
   
   
}
}