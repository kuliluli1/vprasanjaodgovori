import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';

import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { VprasanjaService } from './vprasanja.service';

@Controller('vprasaj')
export class VprasanjaController {
  constructor(
    private VprasanjaService: VprasanjaService,
    private jwtService: JwtService,
  ) {}

  @Get()
  all() {
    return this.VprasanjaService.all();
  }

  @Get('profile')
  async profile(@Req() request: Request) {
    const token = request.cookies['jwt'];

    const data = await this.jwtService.verifyAsync(token);

    return this.VprasanjaService.findOne({ id: data.id });
  }
}
