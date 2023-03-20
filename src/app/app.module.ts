import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToastUiImageEditorModule } from 'ngx-tui-image-editor';

@NgModule({
  imports: [BrowserModule, FormsModule, ToastUiImageEditorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
