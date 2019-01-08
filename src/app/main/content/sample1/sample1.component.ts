import { Component, ViewChild } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

 
@Component({
    selector   : 'fuse-sample1',
    templateUrl: './sample1.component.html',
    styleUrls  : ['./sample1.component.scss']
})
export class FuseSample1Component
{

    constructor(private fuseTranslationLoader: FuseTranslationLoaderService)
    {
       
       
    }
    
}
