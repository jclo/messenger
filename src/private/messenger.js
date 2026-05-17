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
/* global Tree, extend */
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
