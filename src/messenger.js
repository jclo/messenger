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
/* global Tree, root */
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
      name: '{{lib:name}}',
      version: '{{lib:version}}',
    };
    // Initializes the message database to empty:
    obj._db = {};
    return obj;
  };

  // Attaches constants to Messenger that provide name and version of the lib.
  Messenger.NAME = '{{lib:name}}';
  Messenger.VERSION = '{{lib:version}}';

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
