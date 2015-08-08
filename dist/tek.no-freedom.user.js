// ==UserScript==
// @name	Tek.no: freedom
// @namespace	https://github.com/aude
// @author	aude
// @description Tek.no can be a little invasive to our private space. Good thing it's our private space.
// @include	/^https?://(www\.)?(tek|gamer|teknofil|insidetelecom)\.no(/.*)?$/
// @domain	tek.no
// @domain	gamer.no
// @domain	teknofil.no
// @domain	insidetelecom.no
// @match	http://www.tek.no/*
// @match	https://www.tek.no/*
// @match	http://www.gamer.no/*
// @match	https://www.gamer.no/*
// @match	http://www.teknofil.no/*
// @match	https://www.teknofil.no/*
// @match	http://www.insidetelecom.no/*
// @match	https://www.insidetelecom.no/*
// @version	0.5
// @grant	none
// @run-at	document-start
// ==/UserScript==

// ==ChangeLog==
// @history	0.5 GitHub migration
// @history	0.4 initial release
// @history	0.1 dark ages
// ==/ChangeLog==

// ==License==
/*
@licstart
Copyright (C) 2012-toyear  aude

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You may have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
@licend
*/
// ==/License==

(function () {
    // good guy: http://userscripts-mirror.org/scripts/show/125936

    // versioning like a pro:
    // if (!Tek) {return; }
    // var i, c, TekChildrenToRemove = ['pp'];

    // i = TekChildrenToRemove.length;
    // while (i--) {
        // if (Tek.hasOwnProperty(TekChildrenToRemove[i])) {
            // delete Tek[TekChildrenToRemove[i]];
        // }
    // }

    // stop any script with adblock-block functions inbound
    var init = function (e) {
        if (e.target.tagName && e.target.tagName.toUpperCase() === 'SCRIPT' && e.target.innerHTML.indexOf('__AB__()') !== -1) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, tmp = function (e) {
        var shitIds = ['survey-popup', 'survey-iframe'],
            i = shitIds.length, elm;
        while (i--) {
            elm = document.getElementById(shitIds[i]);
            elm.parentNode.removeChild(elm);
        }
    }

    window.addEventListener('beforescriptexecute', init);
    window.addEventListener('load', tmp);
}());
