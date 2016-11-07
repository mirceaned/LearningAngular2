import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: `
    {{result}}
  `
})
export class PropertyBindingComponent {
  
  @Input() result: number = 0;
  
}
