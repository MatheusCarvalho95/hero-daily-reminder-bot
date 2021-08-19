import * as dotenv from "dotenv";
dotenv.config();

export const { BOT_TOKEN, CALL_CHANNEL, DAILY_ONE_ROLE, DAILY_ZERO_ROLE } =
  process.env;
