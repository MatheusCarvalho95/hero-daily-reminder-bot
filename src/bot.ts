import { Client, Intents, TextChannel } from "discord.js";
import cron from "cron";
import {
  BOT_TOKEN,
  CALL_CHANNEL,
  DAILY_ONE_ROLE,
  DAILY_ZERO_ROLE,
} from "./helpers/env-loader";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const startBot = async () => {
  client.login(BOT_TOKEN);

  const daily0Reminder = new cron.CronJob("10 17 * * 1-5", daily0ReminderCall);
  const daily0Start = new cron.CronJob("15 17 * * 1-5", daily0StartCall);

  const daily1Reminder = new cron.CronJob("25 17 * * 1-5", daily1ReminderCall);
  const daily1Start = new cron.CronJob("30 17 * * 1-5", daily1StartCall);

  const fridayReminder = new cron.CronJob("10 17 * * 5", fridayReminderCall);
  const fridayStart = new cron.CronJob("15 17 * * 5", fridayStartCall);

  daily0Reminder.start();
  daily1Reminder.start();
  daily0Start.start();
  daily1Start.start();
  fridayReminder.start();
  fridayStart.start();

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
};

const daily0ReminderCall = () => {
  if (!CALL_CHANNEL || !DAILY_ZERO_ROLE) return;
  const reminderChannel = client.channels.cache.get(CALL_CHANNEL);
  (reminderChannel as TextChannel).send(
    `<@&${DAILY_ZERO_ROLE}>, daily 0 começa em 5 minutos! `,
  );
};
const daily0StartCall = () => {
  if (!CALL_CHANNEL || !DAILY_ZERO_ROLE) return;
  const reminderChannel = client.channels.cache.get(CALL_CHANNEL);
  (reminderChannel as TextChannel).send(
    `<@&${DAILY_ZERO_ROLE}>, daily 0 está começando! `,
  );
};

const daily1ReminderCall = () => {
  if (!CALL_CHANNEL || !DAILY_ONE_ROLE) return;
  const reminderChannel = client.channels.cache.get(CALL_CHANNEL);
  (reminderChannel as TextChannel).send(
    `<@&${DAILY_ONE_ROLE}>, daily 1 começa em 5 minutos! `,
  );
};

const daily1StartCall = () => {
  if (!CALL_CHANNEL || !DAILY_ONE_ROLE) return;
  const reminderChannel = client.channels.cache.get(CALL_CHANNEL);
  (reminderChannel as TextChannel).send(
    `<@&${DAILY_ONE_ROLE}>, daily 1 está começando! `,
  );
};

const fridayReminderCall = () => {
  if (!CALL_CHANNEL || !DAILY_ZERO_ROLE || !DAILY_ONE_ROLE) return;
  const reminderChannel = client.channels.cache.get(CALL_CHANNEL);
  (reminderChannel as TextChannel).send(
    `<@&${DAILY_ZERO_ROLE}> <@&${DAILY_ONE_ROLE}>, hoje é daily sextou galera! Começa em 5 minutos! `,
  );
};

const fridayStartCall = () => {
  if (!CALL_CHANNEL || !DAILY_ZERO_ROLE || !DAILY_ONE_ROLE) return;
  const reminderChannel = client.channels.cache.get(CALL_CHANNEL);
  (reminderChannel as TextChannel).send(
    `<@&${DAILY_ZERO_ROLE}> <@&${DAILY_ONE_ROLE}>, sextouuuuu galeraaaaaa`,
  );
};

export default startBot;
