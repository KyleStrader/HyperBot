import { Client } from "discord.js";
import {container, injectable} from "tsyringe"
import { HelloWorld } from "./commands/helloWorld/helloWorld";


@injectable()
export class Bot {

    constructor(
        private readonly client = container.resolve(Client)
    ) {}

    public async register(): Promise<void> {
        let helloWorldCommand = container.resolve(HelloWorld);
        
    }
}
