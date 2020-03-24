import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatTreeModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        
        FlexLayoutModule,

        MatTreeModule,

        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [TopNavigationComponent, SideNavigationComponent, ContentComponent, FooterComponent],
    declarations: [TopNavigationComponent, SideNavigationComponent, ContentComponent, FooterComponent]
})
export class LayoutModule { }
