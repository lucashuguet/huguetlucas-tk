/**

  The Initial Developer of the Original Code is
  Matthieu  - http://www.programmation-facile.com/
  Portions created by the Initial Developer are Copyright (C) 2013
  the Initial Developer. All Rights Reserved.

  Contributor(s) :

 */


/**
 * Code source :
 * https://github.com/gabrielecirulli/2048/
 * 
 */


/**
 * Gestion des animations
 * 
 * @return {[type]} [description]
 */
(function () 
{
    // les variables locales
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];


    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x)
    {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||  window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) 
    {
        window.requestAnimationFrame = function (callback) 
        {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {callback(currTime + timeToCall);}, timeToCall);

            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) 
    {
        window.cancelAnimationFrame = function (id) {clearTimeout(id);};
    }

}());

