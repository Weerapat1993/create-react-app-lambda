import { 
  describe, 
  it,
  after as afterAll,
  before as beforeAll,
  afterEach,
  beforeEach,
} from 'storybook-addon-specifications'
import expect from 'expect'

window.describe = describe
window.it = it
window.expect = expect
window.afterAll = afterAll
window.beforeAll = beforeAll
window.afterEach = afterEach
window.beforeEach = beforeEach
