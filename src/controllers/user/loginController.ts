import {Request,Response} from 'express'
import { AuthUserService } from '../../services/user/AuthUserService'

export class loginController{

  async handle(req: Request, res:Response){
    console.log('POST : LOGIN USER')

    const {email,password} = req.body;
        const  authService = new AuthUserService();
        const auth =  await authService.execute({email,password});
        return res.json(auth)
  }

}