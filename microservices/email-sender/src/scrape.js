/* eslint-disable no-console */
/* eslint-disable import/first */
import config from 'config'
import Debug from 'debug'
import SendGrid from '@sendgrid/mail'
import QueryString from 'query-string'
import templateBase from './templateBase'

const debug = Debug('scrape:volcanoes')
export default async function scrape(event) {
  const params = QueryString.parse(event.pathParameters.params)
  const html = templateBase({ matricula: params.matricula, mensaje: params.mensaje })
  const apikey = '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'
  SendGrid.setApiKey(apikey)
  const email = `${params.matricula}@upemor.edu.mx`

  const msg = {
    from: 'pambiental@upemor.edu.mx',
    to: email,
    subject: `CECAM ${params.asunto}`,
    html,
  }

  const data = await SendGrid.sendMultiple(msg)
  return data
}
