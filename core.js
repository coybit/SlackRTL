/**
 * Created by coybit on 4/25/14.
 */

function isRTL(s){
    var ltrChars        = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF'+'\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
        rtlChars        = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
        rtlDirCheck     = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');

    return rtlDirCheck.test(s);
};

var msgList = document.body.getElementsByClassName('message_content');

for( var i=0; i<msgList.length; i++ ) {

    if( isRTL(msgList[i].innerText) )
        msgList[i].style.direction = 'rtl';
}
