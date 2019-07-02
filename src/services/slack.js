const http = require('../utils/http');
const constants = require('../constants');

function postMessage(body) {
  const data = {
    channel: body.channel_id,
    text: `Hi! :wave: \n I'm your new bot.`,
    token: constants.SLACK_BOT_ACCESS_TOKEN,
  };

  return http.post(constants.API.CHAT, data);
}

module.exports = {
  postMessage,
};
