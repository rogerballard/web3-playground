/**
 * Import dependencies
 */
import { init } from '@rematch/core'
import subscriptionsPlugin from '@rematch/subscriptions'

import * as models from '../models'

const subscriptions = subscriptionsPlugin()

const store = init({
  models,
  plugins: [
    subscriptions
  ]
})

export default store
