import { init } from '@rematch/core'
import subscriptionsPlugin from '@rematch/subscriptions'
import selectorsPlugin from '@rematch/select'
import createRematchPersist from '@rematch/persist'

import * as models from '../models'
const subscriptions = subscriptionsPlugin()
const select = selectorsPlugin()
const persist = createRematchPersist({
  whitelist: ['contracts'],
  throttle: 2000,
  version: 1
})

const store = init({
  models,
  plugins: [
    select,
    subscriptions,
    persist
  ]
})

export default store
