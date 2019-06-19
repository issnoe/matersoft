import config from 'config'

Object.assign(config, JSON.parse(process.env.CUSTOM))
