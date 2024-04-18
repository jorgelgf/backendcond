
import {Request,Response} from 'express'
import { DetailUserRegisterService } from '../../services/register/DetailUserRegisterService';
export class DetailUserRegisterController{
  async handle(req: Request, res:Response){
 const {user_id} = req;
 console.log('POST : DETAIL REGISTER USER')
    const detailUserRegisterService = new DetailUserRegisterService();
    const detail = await detailUserRegisterService.execute(user_id)

    return res.json(detail)
  }
}