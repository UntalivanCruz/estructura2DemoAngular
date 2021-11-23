import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hardware } from '../models/hardware';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(
    private http: HttpClient
  ) { }
 //CRUD
  getAllHardware(){
    return this.http.get<Hardware[]>('http://hardware-examen.herokuapp.com/equipo-portatils')
  }

  //POST

  //PUT

  //PATCH

  //DELETE
}
