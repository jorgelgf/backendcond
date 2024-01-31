import { Request, Response,NextFunction } from 'express';
import { Secret ,JwtPayload, verify } from 'jsonwebtoken';


export const isAdminAuthenticated =(req:Request,res:Response,next:NextFunction)=>{
  const authToken = req.headers.authorization;
  if (!authToken){
    return res.status(401).end();}
    
    try{
        const token = authToken?.split(" ")[1] as string;
        const sub = verify(token, process.env.JWT_SECRET as Secret) as JwtPayload
        const {role} = sub;
              if(role==="1"){
                throw new Error("Usuário não é administrador");
              }
               next();
            }catch(error){
      return res.status(401).end();
      
    }

  

}