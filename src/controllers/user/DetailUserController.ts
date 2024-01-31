
import {Request,Response} from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

export class DetailUserController{

  async handle( req:Request,res:Response){
    console.log('GET : DETAIL ALL USER')

      const detailUserService = new DetailUserService();
      const user  = await detailUserService.execute();
      return res.json(user);
  }
}