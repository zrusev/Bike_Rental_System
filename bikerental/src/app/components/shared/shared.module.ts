import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NotFoundComponent,
],
    imports: [
    CommonModule,
    RouterModule
],
    exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
]
})
export class SharedModule {}
