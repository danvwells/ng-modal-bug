import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MymodalComponent } from './mymodal/mymodal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  entities = [{
    id: 1,
    name: "Something"
  }, {
    id: 2,
    name: "Another thing"
  }];
  selectedId = 2;
  
  constructor(
    private modalService: NgbModal
  ) {}

  onIdChange(entityId: string) {
    let mymodal = this.modalService.open(MymodalComponent, {
      keyboard: false,
      backdrop: 'static'
    });
  }
}
