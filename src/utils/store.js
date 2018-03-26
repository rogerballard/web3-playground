import { init } from '@rematch/core'
import subscriptionsPlugin from '@rematch/subscriptions'
import selectorsPlugin from '@rematch/select'

import * as models from '../models'
const subscriptions = subscriptionsPlugin()
const select = selectorsPlugin()

const store = init({
  models,
  plugins: [
    select,
    subscriptions
  ]
})

export default store
