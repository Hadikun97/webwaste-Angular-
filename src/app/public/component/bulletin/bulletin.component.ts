import { Component, OnInit } from '@angular/core';
import { BulletinService } from './bulletin.service';
import { Bulletin } from './bulletin';
import { __values } from 'tslib';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {

  bulletin : Bulletin[] = [];

  constructor(private bulletinService: BulletinService) { }
  ngOnInit(){
    this.getbulletin();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  getbulletin() {
    this.bulletinService.getAllbulletin().subscribe((value)=> {
      this.bulletin = value;
      console.log(value);
      
    });
  }
}
