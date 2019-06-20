/* eslint-disable no-console */
/* eslint-disable import/first */
import config from 'config'
import SendGrid from '@sendgrid/mail'
import templateBase from './templateBase'
import log from '@matersoft/utils'

export default async function scrape(event) {
  log(event)
  const {
    correo, asunto, template, mensaje,
  } = event.pathParameters
  const html = templateBase({ matricula: correo, mensaje, template })
  SendGrid.setApiKey(config.get('sendGrid.apikey'))
  const email = `${correo}@upemor.edu.mx`

  const msg = {
    from: 'sgambiental@upemor.edu.mx',
    to: email,
    subject: `CECAM ${asunto}`,
    html,
  }

  const data = await SendGrid.sendMultiple(msg)
  return data
  // return Promise.resolve('resolve')
}
