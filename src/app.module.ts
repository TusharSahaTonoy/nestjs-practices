import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cats/cats.controller';
import { DogController } from './dogs/dogs.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController, DogController],
  providers: [AppService],
})
export class AppModule { }
