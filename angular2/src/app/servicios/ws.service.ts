import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class WSService{
    private url: string = 'http://localhost:3000';
    constructor(private http: HttpClient){}
    public get<Object>(url: string, token: string){
        return this.http.get<Object>(this.url + url);
    }
    public post<Object>(url: string, objeto:any,token:string){
        return this.http.post<Object>(this.url +url,objeto,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    public put<Object>(url: string, objeto:any,token:string){
        return this.http.put<Object>(this.url +url,objeto,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    public delete<Object>(url: string,token:string){
        return this.http.delete<Object>(this.url +url,);
    }
}