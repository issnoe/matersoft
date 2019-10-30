import config from 'config'
import SendGrid from '@sendgrid/mail'
import { reminder, without } from './template'

/**
 * @typedef {Object} EmailParams
 * @property {Array<string>} to  - List matriculas
 * @property {string} from - Email from Firebase Config sender email
 * @property {string} templateName reminder | freed
 * @property {string} message Encoded
 * @property {string} subject
 //  * @property {string} html
 */

/**
 * @function
 * @description
 * Send mail to Array of `matriculas de UPEMOR` para el sistema `SIA`
 * @param {EmailParams} event
 */
export default async function run(event) {
  try {
    const params = JSON.parse(event.body)
    const {
      to = '?', from = '?', templateName = 'reminder', message = '', subject = '',
    } = params

    SendGrid.setApiKey(config.get('sendGrid.apikey'))

    let html = 'hola'
    try {
      if (templateName === 'reminder') {
        html = reminder({ message })
      } else {
        html = without({ message })
      }
    } catch (error) {
      console.log(JSON.stringify(error))
    }

    return SendGrid.sendMultiple({
      from,
      to,
      subject,
      html,
    })
  } catch (error) {
    console.log(error)
    return error
  }
}
