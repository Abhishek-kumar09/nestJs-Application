import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { title } from 'process';
import { Task } from './task.model';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) { };
    
    @Get()
    getAllTasks() {
        return this.taskService.getAlltasks();
    }
    
    @Post()
    createTask(
        @Body() body,
        @Body('title') title: string,
        @Body('description') description: string,
    ): Task {
        console.log(body, title, description);
       return this.taskService.createTask(title, description);
    }
}
