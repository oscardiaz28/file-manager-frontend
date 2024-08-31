import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http : HttpClient) { }

  public getRootFiles() : Observable<File[]> {
    const url = "http://localhost:8080/api/files"
    return this.http.get<File[]>(url);
  }

}
