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


function.prototype.bind = Function.prototype.bind || function (target) 
{
	var self = this;
	return function (args) {
	if (!(args instanceof Array))
	  args = [args];

	self.apply(target, args);
	};
};
