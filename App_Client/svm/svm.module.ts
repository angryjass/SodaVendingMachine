import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SVMComponent } from './svm.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [SVMComponent],
    bootstrap: [SVMComponent]
})
export class SVMModule { }