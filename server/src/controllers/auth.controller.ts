import { Router, Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { RequestHandler } from "express";




class AuthController {
  constructor(private authService: AuthService) {}

  register: RequestHandler =  async (req, res, next) => {
    try {
      const result = await this.authService.register(req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  login: RequestHandler  = async (req, res, next) => {
    try {
      const result = await  this.authService.login(req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController(new AuthService()) as AuthController ;