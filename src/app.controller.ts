import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/phan')
  getHello(@Res() res: Response): string {

    const data = this.appService.getHello();

    res.status(HttpStatus.OK).json({data});
    return
  }
}
