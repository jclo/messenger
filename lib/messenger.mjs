// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
const $__ES6GLOB = {};
(function(root, factory) {
  'use strict';

  /* c8 ignore start */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
  } else {
    // Browser globals.
    root.Messenger = factory(root);
  }
  /* c8 ignore stop */
}($__ES6GLOB, (root) => {
  'use strict';

  /** **************************************************************************
   * _head provides the list of the constants that are defined at the global
   * level of this module and are accessible to all. So, they are considered
   * as reserved words for this library.
   * ************************************************************************ */
  /* - */
  /* eslint-disable no-unused-vars */

  let Messenger
    , extend
    ;

  // Tree is an internal object that links all the internal modules.
  const Tree = {
    Messmethods: {
      Public: {},
    },
  };

  /* eslint-enable no-unused-vars */

  /** **************************************************************************
   *
   * Provides the function 'extend' that is used to fill the object tree with
   * the public static or object methods when the Javascript VM browses the
   * library from the top to the bottom.
   *
   * extend.js is just a literal object that contains a set of functions.
   * It can't be instantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . extend                      extends the passed-in object with new methods,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable no-undef */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Public function ------------------------------------------------------

    /**
     * Extends the passed-in object with new methods.
     *
     * Nota: this function mutates object.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the object to extend,
     * @param {Object}        an object containing a set of methods,
     * @returns {}            -,
     * @since 0.0.0
     */
    extend = function(object, methods) {
      const keys = Object.keys(methods);

      for (let i = 0; i < keys.length; i++) {
        object[keys[i]] = methods[keys[i]];
      }
    };

    // END OF IIFE
  }());
  /* eslint-enable no-undef */

  /** **************************************************************************
   *
   * Defines the Messenger library.
   *
   * messenger.js is built upon the Prototypal Instantiation pattern. It
   * returns an object by calling its constructor. It doesn't use the new
   * keyword.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Constructor:
   *  . Messenger                   creates and returns the Messenger object,
   *
   *
   * Private Static Methods:
   *  . _setTestMode                returns internal objects for testing purpose,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this Messenger object,
   *
   *
   * Public Methods:
   *  . whoami                      returns the library name and version,
   *  . subscribe                   adds an event listener,
   *  . subscribeOnce               adds an event listener that is fired once,
   *  . unsubscribe                 removes an event listener,
   *  . publish                     fires an event,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable no-undef */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules
    const TM = Tree.Messmethods.Public;


    // -- Local Constants


    // -- Local Variables


    // -- Public ---------------------------------------------------------------

    /**
     * Returns the Messenger object.
     * (Prototypal Instantiation Pattern)
     *
     * @constructor ()
     * @public
     * @param {}              -,
     * @returns {Object}      returns the Messenger object,
     * @since 0.0.0
     */
    Messenger = function() {
      const obj = Object.create(methods);
      obj._library = {
        name: 'Messenger',
        version: '2.1.0',
      };
      // Initializes the message database to empty:
      obj._db = {};
      return obj;
    };

    // Attaches constants to Messenger that provide name and version of the lib.
    Messenger.NAME = 'Messenger';
    Messenger.VERSION = '2.1.0';

    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousMessenger = root.Messenger;


    // -- Private Static Methods -----------------------------------------------

    /**
     * Returns the internal objects for testing purpose.
     * (must not be deleted)
     *
     * @method ()
     * @private
     * @param {}              -,
     * @returns {Object}      returns a list of internal objects,
     * @since 0.0.0
     */
    Messenger._setTestMode = function() {
      return [];
    };


    // -- Public Static Methods ------------------------------------------------

    /**
     * Returns a reference to this Messenger object.
     * (must not be deleted)
     *
     * Nota:
     * Running Messenger in noConflict mode, returns the Messenger variable to
     * its previous owner.
     *
     * @method ()
     * @public
     * @param {}              -,
     * @returns {Object}      returns the Messenger object,
     * @since 0.0.0
     */
    Messenger.noConflict = function() {
      root.Messenger = previousMessenger;
      return this;
    };


    // -- Public Methods -------------------------------------------------------

    const methods = {

      /**
       * Returns the library name and version.
       * (must not be deleted)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the library name and version,
       * @since 0.0.0
       */
      whoami() {
        return this._library;
      },

      /**
       * Adds an event listener.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event,
       * @param {Function}    the event handler,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      subscribe(event, listener) {
        TM.subscribe(this._db, event, listener);
        return this;
      },

      /**
       * Adds an event listener that is fired once.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event,
       * @param {Function}    the event handler,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      subscribeOnce(event, listener) {
        TM.subscribeOnce(this._db, event, listener);
        return this;
      },

      /**
       * Removes an event listener.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event,
       * @param {Function}    the event handler,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      unsubscribe(event, listener) {
        TM.unsubscribe(this._db, event, listener);
        return this;
      },

      /**
       * Fires an event.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event,
       * @param {Object}      the payload,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      publish(event, payload) {
        TM.publish(this._db, event, payload);
        return this;
      },
    };

    // END OF IIFE
  }());
  /* eslint-enable no-undef */

  /** **************************************************************************
   *
   * Implements the Messenger methods.
   *
   * messenger.js is just a literal object that contains a set of functions.
   * It can't be instantiated.
   *
   * Private Functions:
   *  . _schema                     returns the event db schema,
   *  . _add                        adds a new event into the db,
   *  . _addEvents                  adds the events to the db,
   *  . _publish                    fires an event,
   *  . _unsubscribe                removes an event listener,
   *  . _subscribeOnce              adds an event listener that is fired once,
   *  . _subscribe                  adds an event listener,
   *
   *
   * Public Static Methods:
   *  . subscribe                   adds an event listener,
   *  . subscribeOnce               adds an event listener that is fired once,
   *  . unsubscribe                 removes an event listener,
   *  . publish                     fires an event,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* - */

  (function() {
    // START OF IIFE


    // -- Module Path
    const Root = Tree.Messmethods.Public;


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Returns the event db schema.
     *
     * @function ()
     * @private
     * @returns {Object}      returns the schema,
     * @since 0.0.0
     */
    function _schema() {
      return {
        listeners: [],
        listenersOnce: [],
      };
    }

    /**
     * Adds a new event into the db.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the event db,
     * @param {String}        the event,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _add(db, e) {
      if (!Object.prototype.hasOwnProperty.call(db, e)) {
        db[e] = _schema();
      }
    }

    /**
     * Adds the events to the db.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the event db,
     * @param {String/Array}  the event,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _addEvents(db, e) {
      if (typeof e === 'string') {
        _add(db, e);
      }
    }

    /**
     * Fires an event.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}        the event db,
     * @param {String}        the event,
     * @param {Object}        the payload,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _publish(db, event, payload) {
      if (typeof event === 'string' && Object.prototype.hasOwnProperty.call(db, event)) {
        // Fires all the 'classic' listeners:
        for (let i = 0; i < db[event].listeners.length; i++) {
          db[event].listeners[i](payload);
        }
        // Fires all the listeners for once:
        for (let i = 0; i < db[event].listenersOnce.length; i++) {
          db[event].listenersOnce[i](payload);
        }
        // Remove all the event listeners for listener once:
        db[event].listenersOnce.splice(0, db[event].listenersOnce.length);
      }
    }

    /**
     * Removes an event listener.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}        the event db,
     * @param {String}        the event,
     * @param {Function}      the listener,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _unsubscribe(db, event, listener) {
      let index;

      if (typeof event === 'string'
          && typeof listener === 'function'
          && Object.prototype.hasOwnProperty.call(db, event)) {
        index = db[event].listeners.indexOf(listener);
        if (index >= 0) {
          db[event].listeners.splice(index, 1);
        }
        index = db[event].listenersOnce.indexOf(listener);
        if (index >= 0) {
          db[event].listenersOnce.splice(index, 1);
        }
      }
    }

    /**
     * Adds an event listener that is fired once.
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Object}        the event db,
     * @param {String}        the event,
     * @param {Function}      the listener,
     * @param {Boolean}       listens for any events if true, registered otherwise,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _subscribeOnce(db, event, listener) {
      _addEvents(db, event);
      if (typeof event === 'string'
          && typeof listener === 'function'
          && Object.prototype.hasOwnProperty.call(db, event)) {
        db[event].listenersOnce.push(listener);
      }
    }

    /**
     * Adds an event listener.
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Object}        the event db,
     * @param {String}        the event,
     * @param {Function}      the listener,
     * @param {Boolean}       listens for any events if true, registered otherwise,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _subscribe(db, event, listener) {
      _addEvents(db, event);
      if (typeof event === 'string'
          && typeof listener === 'function'
          && Object.prototype.hasOwnProperty.call(db, event)) {
        db[event].listeners.push(listener);
      }
    }


    // -- Public Static Methods ------------------------------------------------

    extend(Root, {

      /**
       * Adds an event listener.
       *
       * @method (arg1, arg2, arg3)
       * @public
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Function}    the event handler,
       * @returns {}          -,
       * @since 0.0.0
       */
      subscribe(db, event, listener) {
        _subscribe(db, event, listener);
      },

      /**
       * Adds an event listener that is fired once.
       *
       * @method (arg1, arg2, arg3)
       * @public
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Function}    the event handler,
       * @returns {}          -,
       * @since 0.0.0
       */
      subscribeOnce(db, event, listener) {
        _subscribeOnce(db, event, listener);
      },

      /**
       * Removes an event listener.
       *
       * @method (arg1, arg2, arg3)
       * @public
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Function}    the event handler,
       * @returns {}          -,
       * @since 0.0.0
       */
      unsubscribe(db, event, listener) {
        _unsubscribe(db, event, listener);
      },

      /**
       * Fires an event.
       *
       * @method (arg1, arg2, arg3)
       * @public
       * @param {Object}      the event db,
       * @param {String}      the event,
       * @param {Object}      the payload,
       * @returns {}          -,
       * @since 0.0.0
       */
      publish(db, event, payload) {
        _publish(db, event, payload);
      },
    });

    // END OF IIFE
  }());
  /* - */

  // Returns the library name:
  return Messenger;
}));

// -- Export
export default $__ES6GLOB.Messenger;
