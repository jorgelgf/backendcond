import { prismaClient } from '../../prisma'
export class CreateRegisterService{
  async execute(info:string, user_id:string){

    if(info==="" || user_id ===""){
      throw new Error("Registro inválido");
    }

    const validationUser = await prismaClient.user.findMany({
      where:{
          id:user_id
      }
    })
    if(!validationUser){
      throw new Error("Usuário não encontrado");
      
    }
    const validation = await prismaClient.register.findFirst({
      where:{
       info:info,
       user_id:user_id 
      },
      select:{
        info:true
      }
    })

    if(validation){
      throw new Error("Registro já existente");
      
    }
     const register  = await prismaClient.register.create({
      data:{
        info:info,
        user_id:user_id
      } 
    })
    return register
  }
} 