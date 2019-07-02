const PORT = 3000;
const GAPPS_URL = process.env.GAPPS_URL;
const BASE_API_URL = 'https://slack.com/api'
const SLACK_BOT_ACCESS_TOKEN = process.env.SLACK_BOT_ACCESS_TOKEN;

const API = {
  'DIALOG': '/dialog.open',
  'CHAT': '/chat.postMessage'
};

module.exports = {
  API,
  PORT,
  GAPPS_URL,
  BASE_API_URL,
  SLACK_BOT_ACCESS_TOKEN,
};
