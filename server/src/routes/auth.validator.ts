
import { NextFunction, Request, Response } from "express";
// Update the path below to the correct location of your data source configuration file
import { AppDataSource } from "../ormconfig";
import { User } from "../entities/User";
import { body, ValidationChain } from "express-validator";

const userRepository =  AppDataSource.getRepository(User);

export class validator {
  static loginSchema:ValidationChain[] = [
    body("email")
    .notEmpty().withMessage("Please provide an email")
    .isEmail().withMessage("Please provide a valid email")
    .custom(async(email:string)=>{
        const existingUser = await userRepository.findOne({ where:{email} });
        if(!existingUser){
            throw new Error('User does not exist');
        }
    })
    ,
    body("password")
    .notEmpty().withMessage("Please provide your password")
    .isLength({min:8}).withMessage("please provide a password with atleast 8 characters long")
]

static registerSchema:ValidationChain[] = [
  
  
  
  body("firstName")
  .notEmpty().withMessage("Please provide your firstName")
  .custom(async(firstName:string)=>{
    if (firstName.trim().length == 0) {
   throw new Error('please provide your firstName')   
    }
  })
  ,
  
   
  body("LastName")
  .notEmpty().withMessage("Please provide your LasttName")
  .custom(async(firstName:string)=>{
    if (firstName.trim().length == 0) {
   throw new Error('please provide your LastName')   
    }
  }),

  body("email")
  .notEmpty().withMessage("Please provide an email")
  .isEmail().withMessage("Please provide a valid email")
  .custom(async(email:string)=>{
      const existingUser = await userRepository.findOne({ where:{email} });
      if(existingUser){
          throw new Error('E-mail already in use');
      }
  })
  ,
  body("password")
  .notEmpty().withMessage("Please provide your password")
  .isLength({min:8}).withMessage("please provide a password with atleast 8 characters long")
  ,
  body("country")
  .notEmpty().withMessage("Please input your country")
  .custom( async(country:string)=>{
    country.toLocaleLowerCase();
  })

] 


}