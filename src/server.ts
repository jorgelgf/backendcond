import express, {Request, Response, NextFunction} from 'express';
import swaggerUi from 'swagger-ui-express'
import 'express-async-errors'
import { router } from './routes';
import cors from 'cors';

import swaggerDocs from './swagger.json';

const app = express();
app.use(cors())
app.use(express.json());

const CSS_URL =
  "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-flattop.min.css";

app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {customCssUrl: CSS_URL}))


app.use((err:Error, req:Request,res:Response,next:NextFunction)=>{
 (err instanceof Error) && res.status(400).json({error:err.message})
 return res.status(500).json({status:'error', message:'Erro interno no Servidor'})
})

app.listen(5173, ()=> console.log('Servidor online'))