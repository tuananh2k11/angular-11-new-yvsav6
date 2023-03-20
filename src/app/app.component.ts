import { AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import { ToastUiImageEditorComponent } from 'ngx-tui-image-editor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  options = {
    usageStatistics: false,
  };

  name = 'BGI Test' + VERSION.major;

  myTheme = {
    'header.display': 'none',
  };

  @ViewChild(ToastUiImageEditorComponent)
  editorComponent: ToastUiImageEditorComponent;

  ngAfterViewInit() {
    this.editorComponent.editorInstance.ui.useDefaultUI = false;
    this.editorComponent.editorInstance.ui.options.menu = [
      'crop',
      'flip',
      'rotate',
      'draw',
      'shape',
      'icon',
      'text',
      'filter',
    ]; //,'mask'
    this.editorComponent.editorInstance.ui.options.menuBarPosition = 'top';
    this.editorComponent.editorInstance.ui.options.initMenu = '';
    (this.editorComponent.editorInstance.ui.options.uiSize = {
      width: '1000px',
      height: '700px',
    }),
      //   this.editorComponent.editorInstance.ui.resizeEditor({
      //     imageSize: {oldWidth: 100, oldHeight: 100, newWidth: 150, newHeight: 70},
      //     uiSize: {width: 100, height: 100}
      // });
      this.editorComponent.editorInstance
        .loadImageFromURL(
          'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
          'image'
        )
        .then((result) => {
          this.editorComponent.editorInstance.ui.activeMenuEvent();
        });

    console.log(this.editorComponent.editorInstance);
  }
}
