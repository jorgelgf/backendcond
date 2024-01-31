import { prismaClient } from '../../prisma'
export class CreateRegisterService{
  async execute(info:string, user_id:string){

    if(info==="" || user_id ===""){
      throw new Error("Registro inválido");
    }

    const register  = prismaClient.register.create({
      data:{
        info:info,
        user_id:user_id
      } 
    })
    return register
  }
} 