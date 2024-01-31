import { prismaClient } from '../../prisma'

export class DetailUserRegisterService{
  async execute(user_id:string){
        if (user_id===''){
        throw new Error("Sem informações");
        }
        const infos = await prismaClient.register.findMany({
          where: {
            user_id: user_id
          },
          select:{
            info:true,
          }
        })

        if (!infos){
          throw new Error("Registro inválido");
        }
        
        return infos
  }

}