import { Controller, Get, Param } from '@nestjs/common';
import { IGlob } from 'glob';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("200")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('300')
  getFiles(): string[] {
    return this.appService.GetFiles('src');
  }
}


