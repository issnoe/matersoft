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
    console.log(JSON.stringify(params))
    const {
      to = '?', from = '?', templateName = 'reminder', message, subject,
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
      throw JSON.stringify(error)
    }

    SendGrid.sendMultiple({
      from,
      to,
      subject,
      html,
    }, ((err, data) => {
        console.log(JSON.stringify(err), JSON.stringify(data))
      }))

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Done on event',
        data: `${JSON.stringify(params)}`,
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error',
        data: `${error}`,
      }),
    }
  }
}
