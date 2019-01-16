import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import 'hammerjs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { fuseConfig } from './fuse-config';
import { FuseParametrageComponent } from './main/content/parametre/parametrage/parametrage.component';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatDividerModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { FuseContentComponent } from './main/content/content.component';
import { FuseSampleComponent } from './main/content/sample/sample.component';
import { LoginModule } from './main/content/login/login.module';
import { ForgotPasswordModule } from './main/content/forgot-password/forgot-password.module';
import { FuseLoginlayoutComponent } from './main/content/loginlayout/loginlayout.component';
import { FuseMasterlayoutComponent } from './main/content/masterlayout/masterlayout.component';
import { FuseLoginComponent } from './main/content/login/login.component';
import { FuseContentModule } from './main/content/content.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { ProfileAccueilComponent } from './profile-accueil/profile-accueil.component';
import { EmployésComponent } from './employés/employés.component';
import { AdduserComponent } from './adduser/adduser.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
const appRoutes: Routes = [
    {
        path: 'login', component: FuseLoginlayoutComponent, data: { title: 'First Component' },
        children: [
          { path: '', component: FuseLoginComponent },
        ]
      },
      {
        path: 'main', component: FuseMasterlayoutComponent,
        children: [
            { path: 'sample1', component: ProfileComponent },
            { path: 'sample2', component: FuseParametrageComponent },
            { path: 'sample', component: FuseSampleComponent },
    
        ]
      },
   
    {
        path: '**',
        redirectTo: 'login', pathMatch : 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        FuseLoginlayoutComponent,
        FuseMasterlayoutComponent,
        ProfileComponent,
        ProfileInformationComponent,
        ProfileAccueilComponent,
        EmployésComponent,
        AdduserComponent,
        Dashboard1Component
        
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxChartsModule,
        FuseWidgetModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        MatTableModule,
        CdkTableModule,
        MatDividerModule,
        MatMenuModule,
        MatSortModule,
        MatSelectModule,
        MatSidenavModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        MatRippleModule,
        MatTabsModule,
        MatDatepickerModule,
        LoginModule,
        ForgotPasswordModule,
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        FuseContentModule
    ],
    exports     : [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatMenuModule,
        CdkTableModule,
        FuseWidgetModule,
        FormsModule,
        MatSidenavModule,
        MatDividerModule,
        NgxChartsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTabsModule,
        MatDialogModule,
        MatDatepickerModule,
        MatInputModule,
        MatRippleModule,
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        LoginModule,
        ForgotPasswordModule,
        FuseContentModule
       
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        AdduserComponent
    ]
})
export class AppModule {
}
