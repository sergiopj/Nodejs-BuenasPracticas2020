import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
// model
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  public technology: Technology = {
    _id: '',
    name: '',
    description: '',
    logo: '',
    tags: [],
    updatedAt: null,
    createdAt: null
  };

  constructor(private _activatedRoute: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    // para obtener params por url entre las navegaciones
    this._activatedRoute.params.subscribe( params => {

      const id: string = params['id'];

      this._httpService.getTechnology(id).subscribe( (technology: Technology) => {
        this.technology = technology['technology'];
        console.log(this.technology)
      });

    });
  }

}
