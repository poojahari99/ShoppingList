import { InventoryRepositoryInterface } from "@interfaces";

const mongoose = require('mongoose')
const { Schema } = require('mongoose');

export class InventoryRepository implements InventoryRepositoryInterface{
    
    private MONGO_URL = "mongodb+srv://admin:admin123@clustersmartapp.87act.mongodb.net/Database?retryWrites=true&w=majority"
    private inventorySchema : any;
    private inventoryList : any;
    

    constructor() {

        this.inventorySchema = new Schema({
            item : { type : String },
            unit : { type : Number },
            price : { type : Number }
        });

        mongoose.connect(this.MONGO_URL);
        this.inventoryList = mongoose.model( 'ShoppingList',  this.inventorySchema)
  
    }
    public async createNewItem(item: string, unit: number, price: number): Promise<void> {
        try{
            const newItem : any = { item, unit, price };
            await this.inventoryList.save(newItem);

        } catch(error){
            throw new Error(JSON.stringify(error));
        }   
    }

    // public async removeItemById( id : string): Promise<void> {
    //     try{
    //         await this.inventoryList.deleteOne( {"_id": {$gte:id}} );
    //         console.log("Deleted Item : ", id);

    //     } catch(error){
    //         throw new Error(JSON.stringify(error));
    //     }   
    // }



    // readItem(): void {
    //     throw new Error("Method not implemented.");
    // }
    // updateItem(): void {
    //     throw new Error("Method not implemented.");
    // }
    // deleteItem(): void {
    //     throw new Error("Method not implemented.");
    // }

}