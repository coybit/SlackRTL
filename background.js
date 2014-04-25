chrome.browserAction.onClicked.addListener(function(tab) {
    makeRTL();
});

chrome.runtime.onConnect.addListener(function(port) {
    makeRTL();
});

function makeRTL() {
    chrome.tabs.executeScript(null, {file:"core.js"});
}

var body = document.getElementsByTagName('BODY')[0];

if ((body && body.readyState == 'loaded') || (body &&  body.readyState == 'complete') ) {
    makeRTL();
} else {
    // CODE BELOW WORKS
    if (window.addEventListener) {
        window.addEventListener('load', makeRTL, false);
    } else {
        window.attachEvent('onload',makeRTL);
    }
}