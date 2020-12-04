export class Task {

    public id: number;
    public description: string;
    public scheduleTaskDate: Date;
    public dateFinish: Date;
    public timeSpend: number;

    constructor(id: number,
                description: string,
                scheduleTaskDate: Date,
                dateFinish: Date,
                timeSpend: number){

                    this.id = id;
                    this.description = description;
                    this.scheduleTaskDate = scheduleTaskDate;
                    this.dateFinish = dateFinish;
                    this.timeSpend = timeSpend;
                }

}