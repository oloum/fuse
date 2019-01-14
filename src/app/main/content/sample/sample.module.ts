import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { FuseSampleComponent } from './sample.component';
import { MatPaginatorModule, MatSortModule, MatSelectModule, MatInputModule,
     MatFormFieldModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

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
        MatPaginatorModule,
        FuseSharedModule,
        MatTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule
       
    ],
    exports     : [
        FuseSampleComponent,
        MatTableModule,
        
    ]
})

export class FuseSampleModule
{
}
