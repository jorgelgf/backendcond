import {Request,Response,NextFunction} from 'express'
import { verify } from 'jsonwebtoken';

interface Payload{
  sub:string;
}
export const isAuthenticated = (req:Request,res:Response,next:NextFunction)=>{

    const authToken = req.headers.authorization;

    if (!authToken){
      return res.status(401).end();
    }
      try {
        const token = authToken?.split(" ")[1] as string;
        const sub = verify(token, process.env.JWT_SECRET as string) as Payload;

        //rescue of token id into the user_id variable 
               req.user_id = sub.sub;
              return  next();
      } 
      catch (error) {
            return res.status(401).end();
        }
}