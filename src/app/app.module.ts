import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { PropertyContainerComponent } from './property-container/property-container.component';
import { PropertyHeaderComponent } from './property-container/property-header/property-header.component';
import { PropertyListComponent } from './property-list/property-list.component';
//import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

import{BsDatepickerModule} from "ngx-bootstrap/datepicker"
import{HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { zoomin } from 'src/Directives/zoomin.directive';
import{Property} from "../Models/Property";
import { PropertyDetailComponent } from './property-list/property-detail/property-detail.component'
import { httpcallinterceptor } from 'src/interceptor/httpcalls.intreceptor';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';
import { PropertyOverviewsComponent } from './property-list/property-detail/property-overviews/property-overviews.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertytypeService } from 'src/Services/Propertytype.service';
import{ReactiveFormsModule, FormsModule} from "@angular/forms";
import { PropertyPreviewComponent } from './add-property/property-preview/property-preview.component';
//n
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserComponent } from './user/user.component';
import { PropertyGalleryComponent } from './property-list/property-detail/property-gallery/property-gallery.component';
//import { PropertyGalleryComponent } from './add-property/property-gallery/property-gallery.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { SetPrimaryImageComponent } from './property-list/property-detail/set-primary-image/set-primary-image.component';
@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    PropertyContainerComponent,
    PropertyHeaderComponent,
    PropertyListComponent,
    zoomin,
    PropertyDetailComponent,
    PropertyOverviewComponent,
    PropertyOverviewsComponent,
    AddPropertyComponent,
    PropertyPreviewComponent,
    UserComponent,
    PropertyGalleryComponent,
    SetPrimaryImageComponent,
//    PropertyGalleryComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule,
   // MatDatepickerModule,
    BrowserAnimationsModule,
    //MatNativeDateModule,
   // NgxGalleryComponent,
  NgxGalleryModule,
   
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
               useClass: httpcallinterceptor,
              multi: true},PropertytypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
