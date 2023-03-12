import { Module } from '@nestjs/common';
import { CalcModule } from './calcModule/calc.module';

@Module({
  imports: [CalcModule],
})
export class AppModule {}
