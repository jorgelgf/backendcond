import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors'
import { router } from './routes';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

app.use(router);


app.use((err:Error, req:Request,res:Response,next:NextFunction)=>{
 (err instanceof Error) && res.status(400).json({error:err.message})
 return res.status(500).json({status:'error', message:'Erro interno no Servidor'})
})

app.listen(5173, ()=> console.log('Servidor online'))