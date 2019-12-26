/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/first */
import './src/loadConfig'
import scrape from './src/scrape'

export function run(event, context, callback) {
  scrape(event)
    .then((data) => {
      callback(
        null,
        {
          message: 'Run end',
          data,
        }
      )
    })
    .catch((err) => {
      console.log('hay un error', err)

      callback(
        err,
        {
          message: 'Run end',
          err,
        }
      )
    })
}
