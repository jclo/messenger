// ESLint declarations:
/* global describe, it */
/* - */


// -- Vendor Modules
import { expect } from 'chai';


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
export default function(Messenger) {
  describe('Test the methods "subscribe" and "publish":', () => {
    it('Expects subscribe to return a payload when published.', () => {
      const mess = Messenger();
      mess.subscribe('aaa', (payload) => {
        expect(payload).to.be.an('array');
      });
      mess.publish('aaa', [1, 2, 3]);
    });

    it('Expects this payload to be and array with three elements.', () => {
      const mess = Messenger();
      mess.subscribe('aaa', (payload) => {
        expect(payload).to.be.an('array').that.have.lengthOf(3);
      });
      mess.publish('aaa', [1, 2, 3]);
    });

    it('Expects subscribeOnce to return a payload when published.', () => {
      const mess = Messenger();
      mess.subscribeOnce('aaa', (payload) => {
        expect(payload).to.be.an('array');
      });
      mess.publish('aaa', [1, 2, 3]);
    });

    it('Expects unsubscribe to remove the added event.', () => {
      const mess = Messenger();
      const fn = function() {};
      mess.subscribe('aaa', fn);
      mess.subscribeOnce('aaa', fn);
      mess.unsubscribe('aaa', fn);
      expect(mess._db['aaa'].listeners).to.be.an('array').that.have.lengthOf(0);
      expect(mess._db['aaa'].listenersOnce).to.be.an('array').that.have.lengthOf(0);
    });

    it('Expects subscribe to event 123 does nothing.', () => {
      const mess = Messenger();
      const fn = function() {};
      mess.subscribe(123, fn);
      mess.subscribeOnce(123, fn);
      mess.unsubscribe(123, fn);
      mess.publish(123, 'payload');
      const e = Object.keys(mess._db);
      expect(e).to.be.an('array').that.have.lengthOf(0);
    });
  });
};
