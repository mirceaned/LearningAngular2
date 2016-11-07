import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: `
    {{result}}
  `
})
export class PropertyBindingComponent implements OnInit {
  
  @Input() result: number = 0;

  ngOnInit() {
  }
}
