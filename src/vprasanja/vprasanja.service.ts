import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vprasanja } from './vprasanja.entity';

@Injectable()
export class VprasanjaService {
  constructor(
    @InjectRepository(Vprasanja)
    private readonly VprasanjaRepository: Repository<Vprasanja>,
  ) {}

  async all(): Promise<Vprasanja[]> {
    return this.VprasanjaRepository.find();
  }

  create(data): Promise<Vprasanja> {
    return this.VprasanjaRepository.save(data);
  }

  findOne(condition): Promise<Vprasanja> {
    return this.VprasanjaRepository.findOne(condition);
  }

  async update(id, data): Promise<Vprasanja> {
    await this.VprasanjaRepository.update(id, data);
    return this.findOne({ id });
  }

  delete(id: number): Promise<any> {
    return this.VprasanjaRepository.delete(id);
  }
}
