import { Module } from '@nestjs/common';
import { CoffeeController } from './modules/coffes/coffes.controller';
import { CoffeeService } from './modules/coffes/coffes.service';

@Module({
  imports: [],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class AppModule {}
