import { createPool } from "promise-mysql";

import {database} from "./config";

 export async function connect(){
    const connection =  createPool(database);
      
    return connection;
} 



