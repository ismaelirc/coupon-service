import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductClient {
  constructor(private readonly httpService: HttpService) {}

  async validateProducts(productIds: string[]): Promise<boolean> {
    try {
      const response = await firstValueFrom(
        this.httpService.post('http://productservice:3001/v1/product/validate', { ids: productIds }),
        //this.httpService.post('http://localhost:3001/v1/products/validate', { ids: productIds }),
      );
      return response.data.valid; // Supondo que o outro serviço retorne isso
    } catch (error) {
      throw new BadRequestException('Erro ao validar os produtos');
    }
  }
}