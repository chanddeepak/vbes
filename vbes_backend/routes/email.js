const express = require('express');
const router = express.Router();
const firebase = require('../initFirebase');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const db = firebase.database();
const ref = db.ref('email');

router.get('/', (req, res) => {
  res.send('Hi');
});

router.post('/send', async (req, res) => {
  //const { title, subject, body, recipient, sender } = req.body;

  //console.log(recipient);
  console.log('Hello');

  const survey = {
    title: 'Test',
    subject: 'Test',
    body: 'Test Mail',
    recipient: 'deepu996@gmail.com',
    sender: 'chanddeepakop07@gmail.com',
    dateSent: Date.now()
  };

  const mailer = new Mailer(survey, surveyTemplate(survey));

  try {
    await mailer.send();
    // await survey.save();
    // const user = await req.user.save();
    const sentEmail = ref.child('sent');
    sentEmail.set(survey);

    res.send({
      response: 'Success'
    });
  } catch (err) {
    res.status(422).send(err);
  }
});

module.exports = router;
