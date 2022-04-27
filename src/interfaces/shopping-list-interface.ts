export interface ShoppingListServiceInterface {
    
    addNewItem(
        item : string,
        unit: number,
        price : number
    ) : Promise<void>
}

