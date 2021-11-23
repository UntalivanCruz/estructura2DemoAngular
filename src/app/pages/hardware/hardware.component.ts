import { Component, OnInit } from '@angular/core';
import { Hardware } from 'src/app/models/hardware';
import { HardwareService } from 'src/app/services/hardware.service';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  listOfHardware: Hardware[]=[];

  constructor(
    private hardwareService:HardwareService
  ) { }

  ngOnInit(): void {
    this.hardwareService.getAllHardware().toPromise().then(
      (data: Hardware[])=>this.listOfHardware = data
    )
  }
}
