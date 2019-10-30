/* eslint-disable import/prefer-default-export */
import './src/config'
import email from './src/lib/email'

export async function sender(event, context) {
  return email(event)
}
