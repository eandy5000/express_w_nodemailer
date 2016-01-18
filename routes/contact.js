var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Yahoo',
    auth : {
      user :'eandy5000@yahoo.com',
      pass : 'something'
    }
  });

  var mailOptions = {
      from: 'Andy E <eandy5000@yahoo.com',
      to: 'support@joomdigi.com',
      subject: 'Website Submission',
      // Plain Text Version
      text: 'You have a submission with the following details... Name: '+req.body.name +'Email: '+req.body.email +'Message: '+req.body.message,
      // HTML Version
      html: '<p>You got a website submission with the following details...</p><ul><li>Name: <b>'+req.body.name+'</b></li><li>Email: <b>'+req.body.email+'</b></li><li>Message: <b>'+req.body.message+'</b></li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      // res.redirect('/');
    } else {
      console.log('message sent '+info.response);
      res.redirect('/');
    }

  })

});

module.exports = router;
