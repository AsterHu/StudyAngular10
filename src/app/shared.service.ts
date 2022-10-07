import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //#region   [TODO] call api probably need to check auth with read/update token
  readonly ReadUri="http://localhost:51190/api/questiontag/?withInvalid=true";
  //#endregion
  tagList=[];
  constructor(private http:HttpClient) {   }

  //#region all apis calling
  getTags():Observable<any[]>{
    var result=this.http.get<any>(this.ReadUri);
   // this.tagList=result;
   /* [reference]
   get(url: string,
      options: {
          headers?: HttpHeaders | { [header: string]: string | string[]; };
          params?: HttpParams | { [param: string]: string | string[]; };
          observe?: "body|events|response|";
          responseType: "arraybuffer|json|blob|text";
          reportProgress?: boolean;
          withCredentials?: boolean;}
     ): Observable<> */
    return result;
  }

  getParticularTag(val:any){
    return this.tagList[0];

  }

  //#endregion



}
