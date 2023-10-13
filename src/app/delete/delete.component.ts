import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../list/model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public dataid!: number;
  public employee!: datamodel;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param: Params) => {
      
      this.dataid=param['get']("id");
    });

    // Call the getDelete method to retrieve employee data before deletion
   // this.getDelete();
  }

/*  getDelete() {
    // Use the API service to fetch employee data based on dataid
    this.api.fetchdata(this.dataid).subscribe((data: datamodel) => {
      this.employee = data;
    });
  }*/

  delete() {
    this.api.deleteemployee(this.dataid).subscribe(() => {
      this.router.navigate(['/list']);
      alert("DATA DELETED SUCCESSFULLY !!!!");
    });
  }
}
