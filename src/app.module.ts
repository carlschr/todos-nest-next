import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-todo-db', { useNewUrlParser: true }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
