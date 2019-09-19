const qs = require('querystring');

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
          label: 'Title of Achievement',
          type: 'text',
          name: 'title',
          value: text,
          hint: 'What did you achieve?',
        },
        {
          label: 'Description',
          type: 'textarea',
          name: 'description',
          optional: true,
        },
        {
          label: 'Select a trait that matches your achievement',
          type: 'select',
          name: 'trait',
          options: [
            { label: 'Technical Expertise', value: 'Technical Expertise' },
            { label: 'Entrepreneurial Mindset', value: 'Entrepreneurial Mindset' },
            { label: 'Communication', value: 'Communication' },
            { label: 'Team Player', value: 'Team Player' },
            { label: 'Ownership', value: 'Ownership' },
            { label: 'Learning', value: 'Learning' },
            { label: 'Community Champion', value: 'Community Champion' },
          ],
        },
      ],
    }),
  }

  return http.post(constants.API.DIALOG, dialog);
}

function submitForm(body) {
  const payload = JSON.parse(body.payload);

  const data = {
    channel: payload.channel.id,
    token: constants.SLACK_BOT_ACCESS_TOKEN,
    text: `Hey ${payload.user.name}, thanks for your response`,
  };

  const gappsURL = constants.GAPPS_URL + '?' +  qs.stringify({
    username: payload.user.name,
    title: payload.submission.title,
    trait: payload.submission.trait,
    description: payload.submission.description,
  });

  console.log('GAPPS:', gappsURL);

  return http.axios.get(gappsURL).then(() => {
    return http.post(constants.API.CHAT, data);
  }).catch(err => {
    console.log(err);
  });
}

module.exports = {
  submitForm,
  openDialog,
  postMessage,
};
