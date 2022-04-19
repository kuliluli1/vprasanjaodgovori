import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { Vprasanja } from './vprasanja.entity';
import { VprasanjaService } from './vprasanja.service';
import { VprasanjaController } from './vprasanja.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vprasanja]), CommonModule],
  providers: [VprasanjaService],
  controllers: [VprasanjaController],
  exports: [VprasanjaService],
})
export class VprasanjaModule {}
