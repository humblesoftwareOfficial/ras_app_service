/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class FilterAppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log(req.headers);
    const pm_app_id = req.headers['pm-app-id-group'];
    const sec_model = req.headers['secfetchmodel'];
    const pm_app_sig = req.headers['pm-app-id-signature'];
    // if (!pm_app_id || !sec_model || !pm_app_sig) {
    //   res.status(200).json({  }); 
    // } else {
    //   next();
    // }
    next()
  }
}
