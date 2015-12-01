import test from 'tape';

import saga from '../src/sagas'
import { delay } from '../src/services'
import * as actions from '../src/actions/counter'

const getState = () => 0

test('counter Saga test', function (t) {
  const generator = saga(getState, actions.incrementAsync())

  let next = generator.next()
  t.deepEqual(next.value, [delay, 1000], 'should yield a delay effect')

  next= generator.next()
  t.deepEqual(next.value, actions.increment(), 'should yield an increment action')

  next = generator.next()
  t.equal(next.done, true, 'should be done')

  t.end()
});