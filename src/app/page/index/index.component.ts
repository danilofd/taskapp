import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  page: any;

  displayedColumns: string[] = ['id', 'description', 'scheduleTaskDate', 'dateFinish', 'timeSpend','buttons'];

  tasks = new MatTableDataSource<Task>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.page = {
      size: 5,
      number: 0,
      order: 'id,desc'
    }
    this.tasks.paginator = this.paginator;
    console.log(this.page);
    this.loadPage(this.page);
  }

  getTasks(){
    return this.taskService.findAll(this.page)
                .toPromise()
                .then(data => { return data; });
  }

  loadData(){
    this.getTasks().then(responseApi => {
      this.page = responseApi['data'];
      this.tasks = new MatTableDataSource<Task>(responseApi['data']['content']);
    }, error => {
      console.log(error);
    });
  }

  loadPage(page){
    this.page.number = page.offset;
    this.loadData();
  }

  nextPage(event: PageEvent) {
    this.page.number = event.pageIndex.toString();
    this.page.size = event.pageSize.toString();
    this.loadData();
  }
  

}
