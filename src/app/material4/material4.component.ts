import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-material4',
  templateUrl: './material4.component.html',
  styleUrls: ['./material4.component.css']
})
export class Material4Component implements OnInit {


  ngOnInit(): void {
  }

  hide = true;
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

}
