import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }

  // getViews(){
  //   return 'index'
  // }


  async googleAuthLogin(req){
    if(!req.user){
      return 'No user from google'
    }
    return {
      message:'User info from google',
      user:req.user
    }
  }
}
