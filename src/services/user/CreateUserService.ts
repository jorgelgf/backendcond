import { hash } from 'bcryptjs';
import { prismaClient } from '../../prisma';

interface UserRequest{
    name: string;
    email: string;
    password: string;
    house: String;
}

export class CreateUserService{
  async execute ({name,email,password,house}:UserRequest){
  //verify email
      if(!email || !password || !name || !house){
        throw new Error("Está faltando informações");
      }
              const userAlreadyExists = await prismaClient.user.findFirst({where:{
                email: email.toLowerCase(),
              }})

    if (userAlreadyExists){
      throw new Error("Usuário já existe")
    }

const userAdmin = await prismaClient.user.findFirst({
  where:{
    email: email.toLowerCase(),
    role:"1"
  }
})
if (userAdmin){
  throw new Error("Usuário sem permissão")
}


//create hash
const passwordHash = await hash(password, 8)
//create user
const user = await prismaClient.user.create({
      data:{
        name: name, email:email.toLowerCase(), password:passwordHash, 
        house:`${house}`,
      },  
        select:{
            id:true,
            email:true,
            name:true,
            role:true,
            house:true
        }
})
return user;
  }
}