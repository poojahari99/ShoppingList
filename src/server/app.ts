import { Server, } from 'http';
import express, { Application, } from 'express'; 
import { AppContext } from '../typings';
import { ShoppingListController, BaseController } from '@controllers';
//import { ErrorHandler} from '@middleware'

export class App {

    public app: Application;
    private appContext: AppContext;

    constructor(appContext : AppContext){
        this.app = express();
        this.appContext = appContext;
    }

    public listen(): Server {
        //this.initializeMiddleware();
        this.initializeControllers();
      //  this.initializeErrorHandling();

        const PORT = process.env.PORT || 3001;
        const server = this.app.listen(PORT);

        return server;

    }

    public initializeMiddleware(){
        this.app.use(express.urlencoded({ extended: false, }));
        this.app.use(express.json());
    }

    public initializeControllers() {
        const controllers: BaseController[] = [
          new ShoppingListController(this.appContext)
        ]

        for (const controller of controllers) {
          this.app.use('/', controller.router);
        }
      }
    
    // public initializeErrorHandling(){
    //     this.app.use(ErrorHandler.notFoundHandler);
    //     this.app.use(ErrorHandler.serverErrorHandler);
    // }



}