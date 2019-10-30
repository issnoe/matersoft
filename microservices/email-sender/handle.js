/* eslint-disable import/prefer-default-export */
import './src/config'
import email from './src/lib/email'

export function sender(event, context) {
  return email(event).then(data => ({
    statusCode: 200,
    body: JSON.stringify({
      message: 'Done on event',
      data: `${JSON.stringify(data)}`,
    }),
  })).catch(err => ({
    statusCode: 500,
    body: JSON.stringify({
      message: 'Done on event',
      data: `${JSON.stringify(err)}`,
    }),
  }))
}
