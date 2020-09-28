import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { title } from 'process';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {};

    @Get()
    getAllTasks(): Task[] {
        return this.taskService.getAlltasks();
    }

    @Post()
    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        return this.taskService.createTask(title, description);
    }

    @Get('/:id')
    findTaskbyId(@Param('id') id: string): Task {
        return this.taskService.findTaskbyId(id);
    }

    @Delete('/:id')
    deleteTaskbyId(@Param('id') id: string): Task[] {
        return this.taskService.deleteTaskbyId(id);
    }

    @Patch('/:id/:status')
    updateTask(
        @Param('id') id: string,
        @Param('status') status: TaskStatus,
    ): Task {
        return this.taskService.updateTaskStatus(id, status);
    }
}
