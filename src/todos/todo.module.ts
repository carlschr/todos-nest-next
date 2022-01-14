import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { todoSchema } from './schema/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todo', schema: todoSchema }]),
  ],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
