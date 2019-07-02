const PORT = 3000;
const BASE_API_URL = 'https://slack.com/api'
const SLACK_BOT_ACCESS_TOKEN = process.env.SLACK_BOT_ACCESS_TOKEN;

const API = {
  'CHAT': '/chat.postMessage'
};

module.exports = {
  API,
  PORT,
  BASE_API_URL,
  SLACK_BOT_ACCESS_TOKEN,
};
