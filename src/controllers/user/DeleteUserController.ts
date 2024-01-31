import { Request, Response } from 'express';
import { DeleteUSerService } from '../../services/user/DeleteUSerService';
export class DeleteUserController{
  async handle(req: Request, res:Response){
    console.log('DELETE : USER')

      const deleteUSerService =  new DeleteUSerService();
        const id_user = req.query.id as string;
        const deleteUSer = await deleteUSerService.execute(id_user)
    return res.json(deleteUSer)
}
}
