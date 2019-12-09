import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
