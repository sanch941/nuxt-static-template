const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());
app.use(cors());

app.post('/api/send', function(request, response) {
    const {
        fullName,
        phoneNumber,
        email,
        website,
        comment,
        companyName
    } = request.body;

    const messageTitle =
        comment === '' || !comment ? 'обратную связь' : 'подключение';

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'info@tarlanpayments.kz',
            pass: 'QJ0mujlW9b'
        }
    });

    const mailOptions = {
        from: 'info@tarlanpayments.kz',
        to: 'support@tarlanpayments.kz',
        cc: ['sanch941@gmail.com', 'aigerim.ibraimova@tarlanpayments.kz'],
        // to: 'adilbek.zhaxalykov@gmail.com',
        subject: 'Новая заявка',
        html:
            `<h2 align="center">Поступила новая заявка на ${messageTitle}</h2>` +
            '<h3>ФИО: ' +
            '<b>' +
            fullName +
            '</b></h3>' +
            '<h3>Email: ' +
            '<b>' +
            email +
            '</b></h3>' +
            '<h3>Телефон: ' +
            '<b>' +
            phoneNumber +
            '</b></h3>' +
            '<h3>Сайт: ' +
            '<b>' +
            website +
            '</b></h3>' +
            '<h3>Название компании: ' +
            '<b>' +
            companyName +
            '</b></h3>' +
            '<h3>Комментарий: ' +
            '<b>' +
            comment +
            '</b></h3>'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('error', error);
            response.json({ yo: 'error' });
        } else {
            console.log('ok');
            response.json({ yo: info.response });
        }
    });
});

app.listen(8990, function() {
    console.log('Express server listening on port 8990');
});
