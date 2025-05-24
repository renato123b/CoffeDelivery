import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './create-coffee.dto';

@Injectable()
export class CoffeeService {
  private coffees: CreateCoffeeDto[] = [
    {
      id: '22',
      nome: 'Paraíso',
      tipo: 'Forte',
      quantidade: 2,
      preco: 25.6,
      descricao: 'Café encorpado com notas intensas de cacau e aroma marcante.',
      tags: ['intenso', 'cacau', 'tradicional'],
    },
  ];

  findById(id: string): CreateCoffeeDto {
    const coffee = this.coffees.find((c) => c.id === id);
    if (!coffee) {
      throw new NotFoundException('Café não encontrado');
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffees.push(createCoffeeDto);
    return {
      message: 'Café criado com sucesso',
      cafe: createCoffeeDto,
    };
  }
}
