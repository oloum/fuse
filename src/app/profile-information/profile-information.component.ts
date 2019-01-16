import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'fuse-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss'],
  animations : fuseAnimations
})
export class ProfileInformationComponent implements OnInit {
  about: any;
  constructor() { }

  ngOnInit() {
  }

}
