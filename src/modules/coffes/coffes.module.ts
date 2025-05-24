import { Module } from '@nestjs/common';
import { CoffeeController } from './coffes.controller';
import { CoffeeService } from './coffes.service';

@Module({
  imports: [],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class AppModule {}
