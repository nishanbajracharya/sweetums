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

function openDialog(triggerID, text) {

  const dialog = {
    token: constants.SLACK_BOT_ACCESS_TOKEN,
    trigger_id: triggerID,
    dialog: JSON.stringify({
      title: 'Fill the following form',
      callback_id: 'submit-form',
      submit_label: 'Submit',
      elements: [
        {
          label: 'Title',
          type: 'text',
          name: 'title',
          value: text,
          hint: 'What do you want to do?',
        },
        {
          label: 'Description',
          type: 'textarea',
          name: 'description',
          optional: true,
        },
        {
          label: 'Urgency',
          type: 'select',
          name: 'urgency',
          options: [
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High', value: 'High' },
          ],
        },
      ],
    }),
  }

  return http.post(constants.API.DIALOG, dialog);
}

module.exports = {
  openDialog,
  postMessage,
};
