// ==UserScript==
// @name        Tek.no: freedom
// @namespace   aude
// @description more free usage
// @include     /^https?://(www\.)?(tek|gamer|teknofil|insidetelecom)\.no(/.*)?$/
// @version     0.4
// @grant       none
// @run-at      document-start
// ==/UserScript==

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
