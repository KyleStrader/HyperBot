import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { injectable } from "tsyringe";

@injectable()
export class HelloWorld {
    public readonly command = new SlashCommandBuilder()
        .setName("helloWorld")
        .setDescription("print \'hello world\'");

    public async execute(interaction: ChatInputCommandInteraction): Promise<void> {
        interaction.reply("Hello World");
    }
}