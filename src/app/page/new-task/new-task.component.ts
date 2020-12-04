import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.sass']
})
export class NewTaskComponent implements OnInit {

  id: any;

  task: Task;

  form: FormGroup;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { 
    this.form = new FormGroup({
      scheduleTaskDate: new FormControl(Validators.required),
      dateFinish: new FormControl(),
      timeSpendHour: new FormControl(),
      timeSpendMinute: new FormControl(),
      description: new FormControl(Validators.required)
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if(this.id != null){
        this.taskService.findById(this.id).subscribe(data => {
          this.task = data['data'];
          this.form = new FormGroup({
            scheduleTaskDate: new FormControl(new Date(this.task.scheduleTaskDate), Validators.required),
            dateFinish: new FormControl(this.task.dateFinish),
            timeSpendHour: new FormControl(Math.floor(this.task.timeSpend / 60)),
            timeSpendMinute: new FormControl(this.task.timeSpend % 60),
            description: new FormControl(this.task.description, Validators.required)
          });
        });
      }
    });
  }

  save(){
    this.taskService.saveUpdate(
      new Task(this.task != null ? this.task.id : null,
        this.form.value.description,
        this.form.value.scheduleTaskDate,
        this.form.value.dateFinish,
        ((this.form.value.timeSpendHour * 60) + this.form.value.timeSpendMinute))
    ).subscribe();
    this.router.navigate(["/"]);
  }

}
