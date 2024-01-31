import { Request,Response } from 'express';
import { DeleteRegisterService } from '../../services/register/DeleteRegisterService';

export class DeleteRegisterController {
  async handle(req: Request, res:Response){  
    console.log('DELETE : DELETE REGISTER')

    const deleteRegisterService = new DeleteRegisterService();
    const id_register= req.query.id as string;
if(!id_register){
  return res.status(400).json({error: "Id do registro não encontrado"})
}
   const registerDelete = await deleteRegisterService.execute(id_register)
    
    return res.json(registerDelete)

}
}