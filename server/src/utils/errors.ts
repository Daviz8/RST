import { Response } from "express";

class AppResponse{
    static sendOkResponse<T>(res:Response,responseData:T,message?:string){
        res
        .status(200)
        .json({
            status:"success",
            data:responseData,
            message,
        });
    }
    static sendErrorResponse(res:Response,status:number,message:string){
        res
        .status(status)
        .json({
            status:"error",
            message,
            data:null
        });
    }
    static sendFailedResponse<T>(res:Response,status:number,errors:T,message?:string){
        res
        .status(status)
        .json({
            status:"failed",
            errors,
            message,
            data:null
        });
        
    }
    static sendBadRequestResponse<T>(res:Response,errors:T,message?:string){
        res
        .status(400)
        .json({
            status:"failed",
            errors,
            message,
            data:null
        });
    }
}
export default AppResponse;

interface BadRequestErrors{
  [key:string]:any;
}


export class BadRequest extends Error {
  public readonly status:number = 400;
  public readonly httpCode:string = "Bad Request";
  public readonly errors?:BadRequestErrors;

  constructor(description: string,errors?:BadRequestErrors){
    super(description);
    
    Object.setPrototypeOf(this, new.target.prototype);
    this.errors = errors;
    Error.captureStackTrace(this);
  }

}