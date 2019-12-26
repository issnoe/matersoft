/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable quote-props */

const handler = require('../.webpack/service/handle')

const event = {
  state: 'develop'
}
handler.run(event, undefined, (context, res) => {
  console.log(res)
})

