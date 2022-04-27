import { AppContext } from "@typings";
import { NextFunction, Request, Response, } from 'express';
import { request } from "http";
import _ from "lodash";
import { BaseController } from "./base-controller";
const mongoose = require('mongoose')
const { Schema } = require('mongoose');
const bodyParser = require('body-parser');
const ShoppingList = require('@models');


export class ShoppingListController extends BaseController{

     private basePath = '/inventory'

     constructor( appContext : AppContext ){

        super(appContext);
        this.setRoutes();
    }


     private setRoutes(){

        this.router.get(
            `${this.basePath}/:amount/smart-list/`, 
            this.smartList
        )

        this.router.post(
           `${this.basePath}/new-item`,
           this.addNewItem
       )

        this.router.post(
            `${this.basePath}/update-item`,
            this.updateItem
        )

        this.router.delete(
            `${this.basePath}/used-item`,
            this.removeItem
        )
     }

    private smartList = (
        req : Request,
        res : Response

    ) => {
        

    }

    private addNewItem = async (
        req : Request,
        res : Response
    ) => {
        try{
        const { item, unit, price } = req.body
        console.log(req.body)
        
        if(_.isUndefined( item ) || _.isUndefined( unit) || _.isUndefined(price)){
            
            throw new Error("Undefined Entry")
        }
        await this.appContext.shoppingListService.addNewItem(item, unit, price)
        res.status(200).send(" Item added to db ")


       } catch(error) {

        res.send(404).send(error);
      }
    }

    private updateItem = (
        req : Request,
        res : Response

    ) => {
        
    }

    private removeItem = (
        req : Request,
        res : Response

    ) => {
        

    }
     
}
