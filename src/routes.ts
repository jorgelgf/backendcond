import {Router, NextFunction, Request, Response } from 'express'

import { CreateUserController, loginController,DetailUserController, 
  CreateRegisterController,DetailUserRegisterController, DeleteRegisterController, 
  DeleteUserController } from './controllers';
import { isAuthenticated,isAdminAuthenticated } from './middlewares';
import { DetailAllRegisterController } from './controllers/register/DetailAllRegisterController';

export const router = Router();


//-- ROUTES USERS
//login
router.post('/login', new loginController().handle)
//Only logged-in adm - create users
router.post('/create',isAdminAuthenticated, new CreateUserController().handle)
//Only logged-in users - List users 
router.get('/list', isAuthenticated, new DetailUserController().handle )
//Only logged-in users - delete user
router.delete('/user/remove', isAdminAuthenticated, new DeleteUserController().handle )

//- ROUTES REGISTERS
//create register
router.post('/register', isAuthenticated, new CreateRegisterController().handle )
//list all registers
router.get('/register/all', isAuthenticated, new DetailAllRegisterController().handle )
//list registers
router.post('/register/user',isAuthenticated, new DetailUserRegisterController().handle)
//delete register
router.delete("/register/remove", isAuthenticated, new DeleteRegisterController().handle)



router.get('/', (req:Request,res:Response, next:NextFunction)=>{ 
  console.log('Servidor online')

  return res.json({ok:"Servidor online!"});
})