

import { prismaClient } from '../../prisma'
export class DeleteUSerService{
  async execute(id:string){
const deleteUSer = prismaClient.user.delete({where:{ id:id}})

return deleteUSer
}
}