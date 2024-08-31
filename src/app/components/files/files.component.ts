import { Component, Input, OnInit } from '@angular/core';
import { File } from '../../models/file.model';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent implements OnInit {

  @Input("files") files : File[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  openFolder(){
    console.log('open folder')
  }

}
