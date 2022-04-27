import { ShoppingListServiceInterface } from "src/interfaces/shopping-list-interface";
import { AppContext, ShoppingListContext } from "@typings";
import { InventoryRepositoryInterface } from "@interfaces";

export class ShoppingListService implements ShoppingListServiceInterface{

    private storage : InventoryRepositoryInterface;

    constructor( shoppingListContext : ShoppingListContext){
        this.storage = shoppingListContext.inventoryRepository;
    }

    public async addNewItem(item: string, unit: number, price: number): Promise<void> {
        
        try{
         await this.storage.createNewItem(item, unit, price);

        } catch(error){
            throw new Error(JSON.stringify(error));
            
        }
        
    }
}