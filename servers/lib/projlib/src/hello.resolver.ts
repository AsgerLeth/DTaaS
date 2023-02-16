import { Query, Resolver } from '@nestjs/graphql';
import * as fs from 'fs';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!';
  }
}
@Resolver()
export class FilesResolver {
  @Query(() => [String])
  files() {
    return fs.readdirSync(".");
  }
}
