// ESLint declarations:
/* global describe */
/* - */


// -- Vendor Modules


// -- Local Modules
import Messenger from '../index.js';
// import Messenger from '../lib/es6lib.mjs';
import pack from '../package.json' with { type: 'json' };
import testlib from './int/lib.js';
import testsubandfire from './int/subandfire.js';


// -- Local Constants
const libname = 'Messenger';


// -- Local Variables


// -- Main
describe('Test Messenger:', () => {
  testlib(Messenger, libname, pack.version, 'without new');
  testsubandfire(Messenger);
});


// - oOo --
