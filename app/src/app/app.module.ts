import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PreloaderComponent} from './components/preloader/preloader.component';
import {BlogDetailsComponent} from './pages/blog-details/blog-details.component';
import {WorksDetailsComponent} from './pages/works-details/works-details.component';
import {ServicesDetailsComponent} from './pages/services-details/services-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from "@angular/material/tooltip";
import {IvyCarouselModule} from "angular-responsive-carousel";
import {MatGridListModule} from "@angular/material/grid-list";
import {FooterComponent} from './components/footer/footer.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {TypeWriterComponent} from "./components/type-writer/type-writer.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ContactDialogComponent, HomeComponent} from "./pages/home/home.component";
import {ExperienceItemComponent} from "./components/experience-item/experience-item.component";
import {ServiceItemComponent} from "./components/service-item/service-item.component";
import {ProjectItemComponent} from "./components/project-item/project-item.component";
import {ClientItemComponent} from "./components/client-item/client-item.component";
import {TestimonialItemComponent} from "./components/testimonial-item/testimonial-item.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {CarouselHolderComponent} from "./components/carousel-holder/carousel-holder.component";
import {EducationItemComponent} from "./components/education-item/education-item.component";
import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {LegalComponent} from "./pages/legal/legal.component";



@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        ClientItemComponent,
        HomeComponent,
        BlogDetailsComponent,
        SkillsComponent,
        TestimonialItemComponent,
        TypeWriterComponent,
        ContactDialogComponent,
        WorksDetailsComponent,
        ProjectItemComponent,
        ServicesDetailsComponent,
        FooterComponent,
        ServiceItemComponent,
        SidenavComponent,
        CarouselHolderComponent,
        ExperienceItemComponent,
        NotFoundComponent,
        EducationItemComponent,
        LegalComponent,
        PrivacyComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        IvyCarouselModule,
        MatGridListModule,
        GraphQLModule,
        HttpClientModule,
        MatTabsModule,
        MatDialogModule,
        MatButtonModule,
        CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
