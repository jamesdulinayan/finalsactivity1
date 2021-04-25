import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-material1',
  templateUrl: './material1.component.html',
  styleUrls: ['./material1.component.css']
})
export class Material1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());
  

}