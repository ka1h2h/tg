const TelegramApi = require("node-telegram-bot-api");
const { gameOptions, againOptions } = require("./options");
const sequelize = require("./db");
const UserModel = require("./models");
const { default: axios } = require("axios");

const token = "6275900746:AAEfRIFt8eQY06sLazUtdy_sdG7lwrVoq4o";

const bot = new TelegramApi(token, { polling: true });

const chats = {};

const start = async () => {
  // try {
  //   await sequelize.authenticate();
  //   await sequelize.sync();
  // } catch (e) {
  //   console.log("Подключение к бд сломалось", e);
  // }

  bot.setMyCommands([
    { command: "/start", description: "Начальное приветствие" },
    { command: "/info", description: "Получить информацию о пользователе" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    // if (msg) {
    //   const options = {
    //     method: "POST",
    //     url: `https://api.telegram.org/${token}/getFile`,
    //     headers: {
    //       accept: "application/json",
    //       "User-Agent":
    //         "Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)",
    //       "content-type": "application/json",
    //     },
    //     data: { file_id: msg?.photo[0]?.file_id },
    //   };
    //   try {
    //     const res = await axios(options);
    //     const data = await res.data;
    //     console.log(data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    if (msg && msg.photo) {
      const image = await bot.getFile({ file_id: msg?.photo[0]?.file_id });
      return bot.sendMessage(chatId, image);
    }
    // try {
    //   if (text === "/start") {
    //     await UserModel.create({ chatId });
    //     await bot.sendSticker(
    //       chatId,
    //       "https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp"
    //     );
    //     return bot.sendMessage(
    //       chatId,
    //       `Добро пожаловать в телеграм бот автора ютуб канала ULBI TV`
    //     );
    //   }
    //   if (text === "/info") {
    //     // const user = await UserModel.findOne({ chatId });
    //     console.log(msg);
    //     return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name}`);
    //   }

    //   return bot.sendMessage(chatId, "Я тебя не понимаю, попробуй еще раз!)");
    // } catch (e) {
    //   return bot.sendMessage(chatId, "Произошла какая то ошибочка!)");
    // }
  });
};

start();
