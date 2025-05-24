import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CoffeeService } from './coffes.service';
import { CreateCoffeeDto } from './create-coffee.dto';

@Controller()
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get('coffes/:id/detalhes')
  getCoffeeById(@Param('id') id: string) {
    return this.coffeeService.findById(id);
  }

  @Post('coffee-create')
  @HttpCode(HttpStatus.CREATED)
  createCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }
}
