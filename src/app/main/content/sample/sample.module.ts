import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { FuseSampleComponent } from './sample.component';

const routes = [
    {
        path     : 'sample',
        component: FuseSampleComponent
    }
];

@NgModule({
    declarations: [
        FuseSampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        MatTableModule,
       
    ],
    exports     : [
        FuseSampleComponent,
        MatTableModule,
        
    ]
})

export class FuseSampleModule
{
}
