import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject<any>();
  data: any;
  constructor(private http: HttpClient) { }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json'
      }
    };
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').
    subscribe((res:any)=>{
      this.data =res.data;
      this.dtTrigger.next();
      console.log(this.data);
    })

  }

}
