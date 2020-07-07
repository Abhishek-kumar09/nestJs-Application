import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
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

    @Get('/:id')
    findTaskbyId(@Param('id') id: string) : Task {
        return this.taskService.findTaskbyId(id);
    }      
    
    @Delete('/:id')
    deleteTaskbyId(@Param('id') id: string): Task[] {
        return this.taskService.deleteTaskbyId(id);
     }

    
    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string,
    ): Task {
        console.log(title, description);
       return this.taskService.createTask(title, description);
    }
}
