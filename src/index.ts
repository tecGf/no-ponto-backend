import { App } from "./app"
import * as dotenv from "dotenv";

dotenv.config({path: 'src/.env'});

new App().server.listen(3000);