require('dotenv').config();

const wphone = process.env.WPP_PHONE;
const token = process.env.WPP_ACCESSTOKEN;
const template_name = process.env.WPP_TEMPLATE_NAME;


const url = `https://graph.facebook.com/v16.0/${wphone}/messages`;


function Send_whatsapp(phone, qr_img){
    const message = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: '55'+phone,
        type: 'template',
        template: {
        name: `${template_name}`,
        language: {
            code: 'pt_BR',
        },
        components: [
            {
            type: 'header',
            parameters: [
                {
                type: 'image',
                image: {
                    link: 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl='+qr_img,
                },
                },
            ],
            },
        ],
        },
    };

    fetch(url, {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
        console.log('Mensagem enviada com sucesso!');
        } else {
        console.log('Erro ao enviar mensagem:', response.statusText);
        }
    })
    .catch(error => {
        console.log('Erro ao enviar mensagem:', error.message);
    });
}

module.exports = {Send_whatsapp}