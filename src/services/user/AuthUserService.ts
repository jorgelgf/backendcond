import { sign } from 'jsonwebtoken';
import { prismaClient } from '../../prisma';
import { compare } from 'bcryptjs';
interface AuthRequest{
  email: string;
  password: string;
}
export class AuthUserService{
async execute({email,password}:AuthRequest){
  const user = await prismaClient.user.findFirst({
    where:{
    email: email.toLowerCase( ),
  }})
  
      if (!user){
      throw new Error("E-mail/senha inválido!");
      }  

      const passHashCompare = await compare(password, user.password);
 
      if (!passHashCompare){
        throw new Error("Email/senha inválido!");
      }

      const token = sign({
        name: user.name, email: user.email.toLowerCase(), role:user.role
      }, process.env.JWT_SECRET as string,
      {
        subject:user.id,
        expiresIn:"30d"
      }
      )
      return {

        id: user.id,
        name: user.name,
        email:user.email.toLowerCase(),
        house:user.house,
        role:user.role,
        token:token
      };

  }
}