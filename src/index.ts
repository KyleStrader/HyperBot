import "reflect-metadata";
import { container } from "tsyringe";
import { Bot } from "./bot";

const bot = container.resolve(Bot);

const startBot = async () => {
  await bot.register();
};

export {startBot};