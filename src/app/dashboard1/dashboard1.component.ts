import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as shape from 'd3-shape';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'fuse-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
  encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Dashboard1Component implements OnInit {
  projects: any[];
  selectedProject: any;

  widgets: any;
  widget5: any = {};
  widget6: any = {};
  widget7: any = {};
  widget8: any = {};
  widget9: any = {};
  widget11: any = {};

  dateNow = Date.now();
  constructor() { 
    this.selectedProject = this.projects[0];
    
        /**
         * Widget 5
         */
        this.widget5 = {
          currentRange  : 'TW',
          xAxis         : true,
          yAxis         : true,
          gradient      : false,
          legend        : false,
          showXAxisLabel: false,
          xAxisLabel    : 'Days',
          showYAxisLabel: false,
          yAxisLabel    : 'Isues',
          scheme        : {
              domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
          },
          onSelect      : (ev) => {
              console.log(ev);
          },
          supporting    : {
              currentRange  : '',
              xAxis         : false,
              yAxis         : false,
              gradient      : false,
              legend        : false,
              showXAxisLabel: false,
              xAxisLabel    : 'Days',
              showYAxisLabel: false,
              yAxisLabel    : 'Isues',
              scheme        : {
                  domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
              },
              curve         : shape.curveBasis
          }
      };

      /**
       * Widget 6
       */
      this.widget6 = {
          currentRange : 'TW',
          legend       : false,
          explodeSlices: false,
          labels       : true,
          doughnut     : true,
          gradient     : false,
          scheme       : {
              domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
          },
          onSelect     : (ev) => {
              console.log(ev);
          }
      };

      /**
       * Widget 7
       */
      this.widget7 = {
          currentRange: 'T'
      };

      /**
       * Widget 8
       */
      this.widget8 = {
          legend       : false,
          explodeSlices: false,
          labels       : true,
          doughnut     : false,
          gradient     : false,
          scheme       : {
              domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
          },
          onSelect     : (ev) => {
              console.log(ev);
          }
      };

      /**
       * Widget 9
       */
      this.widget9 = {
          currentRange  : 'TW',
          xAxis         : false,
          yAxis         : false,
          gradient      : false,
          legend        : false,
          showXAxisLabel: false,
          xAxisLabel    : 'Days',
          showYAxisLabel: false,
          yAxisLabel    : 'Isues',
          scheme        : {
              domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
          },
          curve         : shape.curveBasis
      };

      setInterval(() => {
          this.dateNow = Date.now();
      }, 1000);

  }

  ngOnInit() {
     /**
         * Widget 11
         */
        this.widget11.onContactsChanged = new BehaviorSubject({});
        this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
        this.widget11.dataSource = new FilesDataSource(this.widget11);
  }

}
export class FilesDataSource extends DataSource<any>
{
    constructor(private widget11)
    {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]>
    {
        return this.widget11.onContactsChanged;
    }

    disconnect()
    {
    }
}
