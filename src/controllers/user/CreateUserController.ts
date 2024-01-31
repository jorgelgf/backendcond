import {Request,Response} from 'express'
import { CreateUserService } from '../../services/user/CreateUserService';
export class CreateUserController{
async handle(req: Request, res:Response){
  console.log('POST : CREATE USER')
  const {name,email,password,house} = req.body;
  const createUserService = new CreateUserService();
  const user = await createUserService.execute({name,email,password,house});
return res.json(user)
}
}