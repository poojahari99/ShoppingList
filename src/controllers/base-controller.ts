import { AppContext, } from '@typings';
import { Router, } from 'express';

export class BaseController {
  public router: Router = Router();
  protected appContext: AppContext;

  constructor(appContext: AppContext) {
    this.appContext = appContext;
  }
}
