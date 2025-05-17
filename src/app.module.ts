import { Module } from '@nestjs/common';
import { CoffeeController } from './app.controller';
import { CoffeeService } from './app.service';

@Module({
  imports: [],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class AppModule {}
