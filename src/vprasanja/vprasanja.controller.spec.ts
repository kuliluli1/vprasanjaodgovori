import { Test, TestingModule } from '@nestjs/testing';
import { VprasanjaController } from './vprasanja.controller';

describe('VprasanjaController', () => {
  let controller: VprasanjaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VprasanjaController],
    }).compile();

    controller = module.get<VprasanjaController>(VprasanjaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
