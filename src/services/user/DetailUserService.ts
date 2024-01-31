import { prismaClient } from '../../prisma';


export class DetailUserService{
async execute(){
  const user = await prismaClient.user.findMany({
select:{
  id:true, email:true, name:true, role:true,house:true
}
  })
  if (!user){
    throw new Error("Usuários não listados");
    
  }
  return user
}

}