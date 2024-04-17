import { prismaClient } from '../../prisma';


export class DeleteRegisterService{
async execute(id_register:string){
  const deleteUSer =  await prismaClient.register.delete({where:{ id:id_register}})
  return deleteUSer
}
}