import dotenv from 'dotenv';
import { App, } from '.';
import { AppContext, ShoppingListContext, } from '../typings'
import { ShoppingListServiceInterface, InventoryRepositoryInterface } from '@interfaces'
import { ShoppingListService } from '@services'
import { InventoryRepository } from '@repositories'


// Environment Setup
dotenv.config();

const applicationName = 'SmartShoppingList';

// Initialize Repository.

export const inventoryRepository: InventoryRepositoryInterface = new InventoryRepository();
// Initialize Storage.

// Initialize Storage Context.

// Initialize Service Context
const shoppingListContext: ShoppingListContext = {
    inventoryRepository,
 }

// Initialize Services
export const shoppingListService: ShoppingListServiceInterface = new ShoppingListService(shoppingListContext);

//App Context
const appContext: AppContext = {
   // sampleService,
   shoppingListService
}


// Express REST server

try {
    const app: App = new App(appContext)
    console.log([ applicationName, 'Initialised Express App',])

    app.listen()
    console.log(['AppEngine', `Server running on PORT: ${process.env.PORT}`,])

} catch(error){

    console.log(['AppEngine', 'Error starting http server:',], error)

}






