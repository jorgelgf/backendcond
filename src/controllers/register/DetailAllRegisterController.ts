import { Request, Response } from 'express';
import { DetailAllRegisterService } from '../../services/register/DetailAllRegisterService';


export class DetailAllRegisterController{
  async handle( req:Request,res:Response){
    console.log('GET : DETAIL ALL REGISTER')
    const detailAllRegisterService = new DetailAllRegisterService();
    const user  = await detailAllRegisterService.execute()
    return res.json(user);
}
}