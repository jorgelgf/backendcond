
import { prismaClient } from '../../prisma';

export class DetailAllRegisterService {
  async execute(){

    const infos = await prismaClient.register.findMany({select:{
    id:true,info:true, user_id:true
    }
        })
        if (!infos){
          throw new Error("Registros não listados");
        }
        return infos;  

  }

}