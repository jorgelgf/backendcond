
import {Request,Response} from 'express'
import { CreateRegisterService } from '../../services/register/CreateRegisterService'

export class CreateRegisterController{
  async handle(req: Request, res:Response){
    console.log('POST : CREATE REGISTER')

    const createRegisterService = new CreateRegisterService();
    const {info,id } = req.body ;
    
      const register = await createRegisterService.execute(info, id);

  return res.json(register);
}
}