import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
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
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { FuseContentComponent } from './main/content/content.component';
import { FuseSampleComponent } from './main/content/sample/sample.component';
import { LoginModule } from './main/content/login/login.module';
import { ForgotPasswordModule } from './main/content/forgot-password/forgot-password.module';
import { FuseLoginlayoutComponent } from './main/content/loginlayout/loginlayout.component';
import { FuseMasterlayoutComponent } from './main/content/masterlayout/masterlayout.component';
import { FuseLoginComponent } from './main/content/login/login.component';
import { ProfileModule } from './main/content/profile/profile.module';
import { FuseContentModule } from './main/content/content.module';
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
            { path: 'sample1', component: FuseContentComponent },
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
        FuseMasterlayoutComponent
        
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        LoginModule,
        ForgotPasswordModule,
        ProfileModule,
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
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        LoginModule,
        ForgotPasswordModule,
        ProfileModule,
        FuseContentModule
       
    ],
    bootstrap: [
        AppComponent
    ]
    
})
export class AppModule {
}
