import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import glob from 'glob';

@Injectable()
export class AppService {
  GetFiles(path: string): string[] { 
    return fs.readdirSync(path).filter(file => {
      const fullPath = `${path}/${file}`;
      const isFile = fs.statSync(fullPath).isFile();
      return isFile;
  
  });
}
  getHello(): string {
    return 'Hello World!';
  }
}
