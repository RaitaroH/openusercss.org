import log from 'chalk-console'
import {connect} from 'camo'
import staticConfig from '../config'

import Theme from './schema/theme'
import User from './schema/user'
import Session from './schema/session'

const init = async () => {
  const config = await staticConfig()
  const connectionUrl = config.get('database.main')

  await connect(connectionUrl)
  log.info('Database connection established')
}

init()

export default async () => {
  return {
    Theme,
    User,
    Session
  }
}
