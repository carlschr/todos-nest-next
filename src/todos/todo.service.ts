import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDTO } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {};

    async createTodo(todo: CreateTodoDTO): Promise<Todo> {
        const newTodo = await this.todoModel.create(todo);
        return newTodo.save();
    };

    async getTodos(): Promise<Todo[]> {
        const todos = await this.todoModel.find().exec();
        return todos;
    };

    async getTodo(id: Types.ObjectId): Promise<Todo> {
        const todo = await this.todoModel.findById(id).exec();
        return todo;
    };

    async updateTodo(id: Types.ObjectId, todo: CreateTodoDTO): Promise<Todo> {
        const updatedTodo = await this.todoModel.findByIdAndUpdate(id, todo, { new: true }).exec();
        return updatedTodo;
    };

    async deleteTodo(id: Types.ObjectId): Promise<any> {
        const deletedTodo = await this.todoModel.findByIdAndDelete(id).exec();
        return deletedTodo;
    };
};
