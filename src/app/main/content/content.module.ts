import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseContentComponent } from 'app/main/content/content.component';
import { FuseParametrageComponent } from './parametre/parametrage/parametrage.component';

@NgModule({
    declarations: [
        FuseContentComponent,
        FuseParametrageComponent,
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
    ],
    exports: [
        FuseContentComponent,
        FuseParametrageComponent,
    ]
})
export class FuseContentModule
{
}
