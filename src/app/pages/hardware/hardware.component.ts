import { Component, OnInit } from '@angular/core';
import { Hardware } from 'src/app/models/hardware';
import { HardwareService } from 'src/app/services/hardware.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})

export class HardwareComponent implements OnInit {
//Arreglo donde va Caer toda la info de mongoDB que yo voy a consumir del API
  listOfHardware: Hardware[] = [];
  visible = false;

  constructor(
    private hardwareService:HardwareService,
    private nzMessageService:NzMessageService
  ) { }

  ngOnInit(): void {
    this.hardwareService.getAllHardware().toPromise().then(
      (data: Hardware[])=>this.listOfHardware = data
    )
  }
  
  delete(id:string){
    this.hardwareService.deleteHardware(id).toPromise().then(()=>{
      this.nzMessageService.warning('El registro fue eliminado con exito!');
      this.listOfHardware = this.listOfHardware.filter(x=>x.id!==id);
    },(error)=>{
      this.nzMessageService.error('El registro no pudo ser eliminado, por favor intente de nuevo');
      console.error(error);
    })
  }

  cancel():void{
    this.nzMessageService.info('Su registro sigue activo! =D')
  }

  open():void{
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
