/* eslint-disable no-console */
/* eslint-disable import/first */
// import config from 'config'
// import SendGrid from '@sendgrid/mail'
// import templateBase from './templateBase'

export default async function scrape(event) {
  return JSON.stringify({
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
  })
  // const emailAdmin = config.get('emailAdmin')
  // const {
  //   correo, asunto, template, mensaje,
  // } = params
  // const html = templateBase({
  //   matricula: correo, mensaje, template, emailAdmin,
  // })
  // SendGrid.setApiKey(config.get('sendGrid.apikey'))
  // // const email = `${correo}@upemor.edu.mx`

  // const msg = {
  //   from: emailAdmin,
  //   to: correo,
  //   subject: `CECAM ${decodeURI(asunto)}`,
  //   html,
  // }
  // log(msg)
  // return SendGrid.sendMultiple(msg)
}
