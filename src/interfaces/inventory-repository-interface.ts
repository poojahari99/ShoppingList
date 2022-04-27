export interface InventoryRepositoryInterface {
    
    createNewItem(
        item : string,
        unit: number,
        price : number
    ) : Promise<void>;

    // readItem(

    // ) :Promise<void>;

    // updateItem(

    // ):Promise<void>;

    // deleteItem(

    // ):Promise<void>;


}

