/* eslint-disable no-console */
/* eslint-disable import/first */
import config from 'config'
import SendGrid from '@sendgrid/mail'
import templateBase from './templateBase'
import log from '@matersoft/utils'

export default async function scrape(event) {
  const emailAdmin = config.get('emailAdmin')
  const {
    correo, asunto, template, mensaje,
  } = event.pathParameters
  const html = templateBase({
    matricula: correo, mensaje, template, emailAdmin,
  })
  SendGrid.setApiKey(config.get('sendGrid.apikey'))
  const email = `${correo}@upemor.edu.mx`

  const msg = {
    from: emailAdmin,
    to: email,
    subject: `CECAM ${decodeURI(asunto)}`,
    html,
  }
  log(msg)

  return SendGrid.sendMultiple(msg)
}
