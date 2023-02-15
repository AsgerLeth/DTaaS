import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFiles(): string {
    return fs.readdirSync('.').join(' ');
  }
}
