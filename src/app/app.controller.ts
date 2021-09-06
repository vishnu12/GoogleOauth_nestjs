import { Controller, Get, Post, Render, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home(@Res() res:Response){
    res.render('index')
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req){}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleRedirect(@Req() req,@Res() res:Response){
    await this.appService.googleAuthLogin(req)
    if(req.user){
      console.log(req.user);
      
      res.render('profile',{user:req.user})
    }
  }
}
