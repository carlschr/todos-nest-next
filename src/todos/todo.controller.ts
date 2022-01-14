import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Types } from 'mongoose';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){};

    @Get('/')
    async getTodos(): Promise<any> {
        const todos = await this.todoService.getTodos();
        return todos;
    };

    @Get('/:id')
    async getTodo(@Param() id): Promise<any> {
        const todo = await this.todoService.getTodo(new Types.ObjectId(id));
        return todo;
    };

    @Post('/')
    async createTodo(@Body() todo): Promise<any> {
        const data = await this.todoService.createTodo(todo);
        return data;
    };

    @Put('/:id')
    async updateTodo(@Param() id, @Body() todo): Promise<any> {
        const data = await this.todoService.updateTodo(new Types.ObjectId(id), todo);
        return data;
    };

    @Delete('/:id')
    async deleteTodo(@Param() id): Promise<any> {
        const data = await this.todoService.deleteTodo(new Types.ObjectId(id));
        return data;
    };
};
