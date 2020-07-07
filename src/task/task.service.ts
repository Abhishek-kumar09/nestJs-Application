import { Injectable, Get } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class TaskService {
    private tasks: Task[] = []

    getAlltasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);
        return task;
    }

    findTaskbyId(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    @Get()
    deleteTaskbyId(id: string): Task[] {
        this.tasks = this.tasks.filter(task => task.id != id);
        return this.tasks;
    }

}
