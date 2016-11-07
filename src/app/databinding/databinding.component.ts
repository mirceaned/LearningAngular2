import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation = "this is string";
  numberInterpolation = 2;

  constructor() { }

  onTest() {
    return true;
  }

  onClicked(value: string) {
    alert(value);
  }
}
