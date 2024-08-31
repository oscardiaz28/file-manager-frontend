import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../../services/file.service';
import { File } from '../../models/file.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  fragment : string | null = null;
  files: File[] = [];

  constructor(private route : ActivatedRoute, private fileService : FileService){}

  ngOnInit(): void {
    this.fileService.getRootFiles().subscribe( {
      next: (data : File[]) => {
        this.files = data
      }
    })

    this.route.fragment.subscribe( (fragment) => {
      this.fragment = fragment;
      // console.log(this.fragment)
    })

  }
}
