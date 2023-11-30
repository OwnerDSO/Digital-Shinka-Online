BorwserSet = function () { };
BorwserSet.prototype = {
    menu_off: function () {
        document.oncontextmenu = function () { return false; }
    }
}
function winResize() {
    var dWidth = parseInt(document.body.scrollWidth);
    var dHeight = parseInt(document.body.scrollHeight);
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.width = "100%";
    div.style.height = "100%";

    document.body.appendChild(div);
    window.resizeBy(dWidth - div.offsetWidth, dHeight - div.offsetHeight);
    document.body.removeChild(div);
}
function open_pop(openUrl, width, height) {
    var cw = width;
    var ch = height;
    var sw = screen.availWidth;
    var sh = screen.availHeight;
    var px = (sw - cw) / 2;
    var py = (sh - ch) / 2;
    return window.open(openUrl, '', 'toolbar=no,resizable=no,location=no,menubar=no,scrollbars=no,location=no,width=' + cw + ',height=' + ch + ', top=' + py + ', left=' + px + '');
}


function openpop(openUrl, name, width, height) {
    var cw = width;
    var ch = height;
    var sw = screen.availWidth;
    var sh = screen.availHeight;
    var px = (sw - cw) / 2;
    var py = (sh - ch) / 2;
    var wo = window.open(openUrl, name, 'toolbar=no,resizable=no,location=no,menubar=no,scrollbars=no,location=no,width=' + cw + ',height=' + ch + ', top=' + py + ', left=' + px + '');
    if (wo != null) {
        wo.focus();
    }

    return wo;
}

function write_flash(width, height, name) {
    var html = '';
    html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + location.protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" style="z-index:1;" width="' + width + '" height="' + height + '" id="top_menu" align="middle">';
    html += '<param name="allowScriptAccess" value="sameDomain" />';
    html += '<param name="allowFullScreen" value="false" />';
    html += '<param name="movie" value="' + name + '" />';
    html += '<param name="quality" value="high" />';
    html += '<param name="wmode" value="transparent" />';
    html += '<embed src="' + name + '" quality="high" width="' + width + '" height="' + height + '" name="top_menu" align="middle" allowscriptaccess="sameDomain" wmode="transparent" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="' + location.protocol + '://www.macromedia.com/go/getflashplayer" />';
    html += '</object>';
    document.write(html);
}

function view_flash() {
    var html = '';
    html += '<div style="position:absolute; width:520px; height:330px; top:50%; left:50%; margin-top:-165px; margin-left:-260px; cursor:pointer; background-image:url(\'/images/view_big.gif\');" onclick="$(\'#flash_dmo\').remove();$(this).remove(); ">';
    html += '    <div style="width:480px; height:270px; margin:40px auto 0px auto;">'
    html += '        <object id="flash_dmo" width="480" height="270" style="z-index:1; " classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + location.protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0">';
    html += '            <param name="movie" value="/images/flash/dmo.swf" />';
    html += '            <param name="quality" value="high" />';
    html += '            <param name="wmode" value="Transparent" />';
    html += '            <embed src="/images/flash/dmo.swf" quality="high" pluginspage="' + location.protocol + '://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="480" height="270"></embed>';
    html += '        </object>';
    html += '    </div>';
    html += '<div>'
    $('body').append(html);
}

function selectLeftMenu(pageGrup, selectGroup) {

    if (pageGrup == 'mypage') {
        var $targent = $('#leftlinks').find('.link > p > a[pgroup=\'' + selectGroup + '\']')
        if ($targent.length > 0) {
            $targent.css({ 'color': '#5683d6', 'font-weight': 'bold' });
            $targent.parent().children('img').attr('src', '/images/mypage/dot.gif');
        }
    }

}

function popCashCharge() {
    return openpop("/cash/charge/ChagreStep1.aspx", "popCashCharge", "460", "575");
}

function popPNetCashCharge() {
    //PN_CHARGE_URL - > UcHeadPrefix.ascx 에서 선언
    return openpop(PN_CHARGE_URL, "popCashCharge", "540", "540");
}

function popToonCashCharge(strDNS) {
    //TN_CHARGE_URL - > UcHeadPrefix.ascx 에서 선언
    location.replace('http://' + strDNS + '/game/TooniToon.tl');
}

function popIMbcCashCharge() {
    var url = 'http://icash.imbc.com/index.asp';
    location.replace(url);
}

function popMgameCashCharge() {
    //MGAME_CHARGE_URL - > UcHeadPrefix.ascx 에서 선언
    return openpop(MGAME_CHARGE_URL, "popCashCharge", "510", "540");
}
function popZamgameCashCharge() {
    //var url = 'https://zbill.zamgame.com/charge/v2/step1.aspx';
    //return openpop(url, "popCashCharge", "460", "575");
    return gZamLib.goLink('BillCharge');
}

function popHanGameCashCharge() {
    //HG_CHARGE_URL - > UcHeadPrefix.ascx 에서 선언
    return openpop(HG_CHARGE_URL, "popCashCharge", "540", "540");
}

function popShopOrder(shopNo) {
    return openpop("/shop/order/PopOrderStep1.aspx?shopno=" + shopNo, "popShopOrder", "450", "370");
}
function popShopGift(shopNo) {
    return openpop("/shop/gift/PopGiftStep1.aspx?shopno=" + shopNo, "popShopGift", "450", "520");
}

function GameStartActionBefore() {
    location.href = "/launcher/launcher_zamexcute.aspx";
    return false;
}

var gboolStartFlag = false;
function GameStartActionZamgame(secuno, secuid) {
    if (gboolStartFlag) {
        return false;
    }

    var objLaun = document.GameStartControl;
    if (objLaun.object == null) {
        location.href = "/launcher/help_activeX.aspx";
        return false;
    }
    else if (!objLaun.IsGameLaunching()) {  //런처가 실행
        location.href = '/launcher/launcher_zamexcute.aspx';
        return false;
    }


    //    try {
    //        var LaunVersion = objLaun.GetFileVersion();
    //        var LaunLastet = $('#GameStartControl').attr('version');
    //        alert(LaunLastet);
    //        if (LaunVersion != LaunLastet) {
    //            alert('버젼정보가 올바르지 않습니다. 다시 시도해 주세요. \n(Version : ' + LaunVersion + ')');
    //            location.reload();
    //            return false;
    //        }
    //    }
    //    catch (e) {
    //        alert('설치중 오류가 발생하였습니다. 런처를 재설치 해주세요.');
    //        location.reload();
    //        return false;
    //    }

    gboolStartFlag = true;
    $.post('/inc/xml/launcher.aspx?secuId=' + secuno + '&secuName=' + secuid, {}, function (data) {

        var strPostUrl = '/index.aspx';

        $result = $(data).find("result");


        var value = $result.attr('value');
        if (value == 0) {
            var $parmNodes = $result.children('param');

            var $param1 = $(document.createElement('param'));
            var $param2 = $(document.createElement('param'));
            var $param3 = $(document.createElement('param'));
            var $param4 = $(document.createElement('param'));
            var $param5 = $(document.createElement('param'));

            $param1.attr('id', 'param1').val($parmNodes.eq(0).attr('value'));
            $param2.attr('id', 'param2').val($parmNodes.eq(1).attr('value'));
            $param3.attr('id', 'param3').val($parmNodes.eq(2).attr('value'));
            //$param4.attr('id', 'param4').val($parmNodes.eq(3).attr('value'));
            $param4.attr('id', 'param4').val('ZAM');	//이름이 달라서 강제로...... 
            $param5.attr('id', 'param5').val($parmNodes.eq(4).attr('value'));

            //alert($param5.val());
            //$param4.val()
            //alert($param4.val());
            var param = $param1.val() + ' ' + $param2.val() + ' ' + $param3.val() + ' ' + $param4.val() + ' ' + $param5.val();
            var GameLaunchingResult = document.GameStartControl.GameLaunching(param);

            if (GameLaunchingResult) {
                strPostUrl = '/launcher/launcher_excute.aspx';
            }
            else {
                location.reload();
            }
        }
        else {
            strPostUrl = $result.text();
        }
        gboolStartFlag = false;
        location.replace(strPostUrl);
    });
}

function CheckIE() {
    var agent = navigator.userAgent.toLowerCase();
    var browser = "";
    var appname = navigator.appName;

    // MS 계열 브라우저를 구분하기 위함.
    if (appname === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
        browser = 'ie';
        if (appname === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
            agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
            browser += parseInt(agent[1]);
        } else { // IE 11+
            if (agent.indexOf('trident') > -1) { // IE 11 
                browser += 11;
            } else if (agent.indexOf('edge/') > -1) { // Edge
                browser = 'edge';
            }
        }

        if (browser == 'edge') {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

var gboolStartFlag = false;
function GameStartAction() {
    if (gboolStartFlag) {
        return false;
    }

    //live=82 qa=12		
    var LauncherType = "82"

	/*
    var LauncherDownLoadLink = "http://movegames-cdn.gameking.com/Movegames/431956/DMO/Korea/Launcher/D-PlayerInstall_241.exe";

    if (LauncherType == "12") {
        LauncherDownLoadLink = "http://movegames-cdn.gameking.com/Movegames/431956/DMO/Dev_Alpha/Kor/Launcher/D-PlayerInstall_Alpha_245.exe";
    }
	*/

    if (!CheckIE()) {
        location.href = "/launcher/launcher_chrome.aspx";
       return false;
    }
    else {
        var objLaun = document.GameStartControl;

        if (objLaun.object == null) {
            alert('ActiveX를 설치 하시기 바랍니다.');
            location.href = "/down/main.aspx";
            return false;
        }

        if (!objLaun.IsInstalledLauncher(LauncherType)) {
            alert('런처를 설치 하시기 바랍니다.');
            //location.href = LauncherDownLoadLink;
			location.href = "/down/main.aspx";
            return false;
        }

        gboolStartFlag = true;
        $.post('/inc/xml/launcher.aspx', {}, function (data) {

            var strPostUrl = '/index.aspx';

            $result = $(data).find("result");

            var value = $result.attr('value');
            if (value == 0) {
                var $parmNodes = $result.children('param');

                var $param1 = $(document.createElement('param'));
                var $param2 = $(document.createElement('param'));
                var $param3 = $(document.createElement('param'));
                var $param4 = $(document.createElement('param'));
                var $param5 = $(document.createElement('param'));

                $param1.attr('id', 'param1').val($parmNodes.eq(0).attr('value'));
                $param2.attr('id', 'param2').val($parmNodes.eq(1).attr('value'));
                $param3.attr('id', 'param3').val($parmNodes.eq(2).attr('value'));
                $param4.attr('id', 'param4').val($parmNodes.eq(3).attr('value'));
                $param5.attr('id', 'param5').val($parmNodes.eq(4).attr('value'));

                var param = $param1.val() + ' ' + $param2.val() + ' ' + $param3.val() + ' ' + $param4.val() + ' ' + $param5.val();
                var GameLaunchingResult = document.GameStartControl.GameLaunching(param, LauncherType);

                if (GameLaunchingResult) {
                    strPostUrl = '/launcher/launcher_excute.aspx';
                }
                else {
                    location.reload();
                }
            }
            else {
                strPostUrl = $result.text();
            }
            gboolStartFlag = false;
            if (!CheckIE()) {
                location.replace(strPostUrl);
            }
            else {
                location.href(strPostUrl);
            }
        });
    } 
}

function request(valuename) {
    var rtnval = "";
    var nowAddress = unescape(location.href);
    var parameters = (nowAddress.slice(nowAddress.indexOf("?") + 1, nowAddress.length)).split("&");

    for (var i = 0; i < parameters.length; i++) {
        var varName = parameters[i].split("=")[0];
        if (varName.toUpperCase() == valuename.toUpperCase()) {
            rtnval = parameters[i].split("=")[1];
            break;
        }
    }
    return rtnval;
}

function color_change(target) {
    var color = '#ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff'.split(' ');
    var tid;
    var cnt = 0;

    function change() {
        if (cnt < 10) { target.css("background", "url('') no-repeat " + color[cnt]); cnt++; }
        else clearInterval(tid);
    }
    tid = setInterval(change, 30);
}

function top_flash(main, sub) {
    $form = $('#form2');
    if (main == 0) {
        if (sub == 0) $form.attr('action', http + '/index.aspx');
        else if (sub == 1) {
            dns = document.location.href; //<-- 현재 URL 얻어온다
            arrDns = dns.split("//"); //<-- // 구분자로 짤라와서
            str = arrDns[1].substring(0, arrDns[1].indexOf("/"));

            if (str == "dm.zamgame.com") {
                GameStartActionBefore();
                return;
            } else {
                GameStartAction();
                return;
            }
        }
    }
    else if (main == 1) {
        if (sub == 1) $form.attr('action', http + '/news/main.aspx');
        else if (sub == 2) $form.attr('action', http + '/news/main.aspx');
        else if (sub == 3) $form.attr('action', http + '/news/update.aspx');
        else if (sub == 4) $form.attr('action', http + '/news/report.aspx');
        else if (sub == 5) $form.attr('action', http + '/news/event.aspx');
    }
    else if (main == 2) {
        if (sub == 1) $form.attr('action', http + '/info/main.aspx');
        else if (sub == 2) $form.attr('action', http + '/info/main.aspx');
        else if (sub == 3) $form.attr('action', http + '/info/character.aspx');
        else if (sub == 4) $form.attr('action', http + '/info/start.aspx');
        else if (sub == 5) $form.attr('action', http + '/info/interface.aspx');
    }
    else if (main == 3) {
        if (sub == 1) $form.attr('action', http + '/down/main.aspx');
        else if (sub == 2) $form.attr('action', http + '/down/main.aspx');
        else if (sub == 3) $form.attr('action', http + '/down/wallpaper.aspx');
    }
    else if (main == 4) {
        if (sub == 1) $form.attr('action', http + '/ranking/tamer.aspx');
        else if (sub == 2) $form.attr('action', http + '/ranking/tamer.aspx');
        else if (sub == 3) $form.attr('action', http + '/ranking/partner.aspx');
        else if (sub == 4) $form.attr('action', http + '/ranking/sub.aspx');
        else if (sub == 5) $form.attr('action', http + '/ranking/size.aspx');
    }
    else if (main == 5) {
        if (sub == 1) $form.attr('action', http + '/guild/main.aspx');
        else if (sub == 2) $form.attr('action', http + '/guild/main.aspx');
        else if (sub == 3) $form.attr('action', http + '/guild/screen.aspx');
        else if (sub == 4) $form.attr('action', http + '/guild/myguild.aspx');
    }
    else if (main == 6) {
        if (sub == 1) $form.attr('action', http + '/comm/free.aspx');
        else if (sub == 2) $form.attr('action', http + '/comm/free.aspx');
        else if (sub == 3) $form.attr('action', http + '/comm/main.aspx');
        else if (sub == 4) $form.attr('action', http + '/comm/know.aspx');
        else if (sub == 5) $form.attr('action', http + '/comm/note.aspx');
    }
    else if (main == 7) {
        if (sub == 1) $form.attr('action', http + '/shop/ItemShop.aspx');
        else if (sub == 2) $form.attr('action', http + '/shop/main.aspx');
        else if (sub == 3) $form.attr('action', http + '/shop/ItemShop.aspx');
        else if (sub == 4) $form.attr('action', http + '/cash/main.aspx');
    }
    else if (main == 8) {
        if (sub == 1) $form.attr('action', http + '/customer/main.aspx');
        else if (sub == 2) $form.attr('action', http + '/customer/main.aspx');
        else if (sub == 3) $form.attr('action', http + '/customer/question.aspx');
        else if (sub == 4) $form.attr('action', http + '/customer/cs.aspx');
    }
	//럼체 추가
    else if (main == 9) {
        if (sub == 0) $form.attr('action', http + '/index.aspx');
        else if (sub == 1) {
		GameStartRumbleAction();
		return;
        }
    }
	//럼체 끝

    $form.submit();
}

ValidateMsg = function () {
};
ValidateMsg.prototype = {
    fade_msg: function (target, msg, sub_target_1, sub_target_2) {
        var html = '<div class="msg_arrow" title="' + $(target).attr('class') + '"><div class="div1"></div><div class="div2"><p>' + msg + '</p></div></div>';
        $('body').append(html);
        var border_width = ($.browser.msie ? parseInt($(target).css('border-width')) : 0);
        var top = $(target).offset().top + ((parseInt($(target).css('height')) + border_width * 2) / 2) - parseInt($('.msg_arrow').css('height')) / 2;
        var left = $(target).offset().left + parseInt($(target).css('width'));
        $('.msg_arrow').css({ 'top': top, 'left': left + 10 });
        $('.msg_arrow').fadeIn();
        $(target).focus(function () { $('.msg_arrow[title="' + $(target).attr('class') + '"]').remove(); });
        $(sub_target_1).focus(function () { $('.msg_arrow[title="' + $(target).attr('class') + '"]').remove(); });
        $(sub_target_2).focus(function () { $('.msg_arrow[title="' + $(target).attr('class') + '"]').remove(); });
    }
}

Validate = function () {
};
Validate.prototype = {
    security_name: function (value) {
        return /[a-z]/i.test(value) && /^[a-z0-9]{6,}$/i.test(value);
    },
    security_code: function (value) {
        //return /^[a-z0-9!@#$%^&*()_-]{6,}$/i.test(value);
        return /([a-zA-Z0-9].*[!,@,$,%,^,&,*,?,_,~,-])|([!,@,$,%,^,&,*,?,_,~,-].*[a-zA-Z0-9]){6,16}$/i.test(value);
    },
    security_extend: function (value) {
        return /[!,@,$,%,^,&,*,?,_,~,-].*$/i.test(value);
    },
    phone_number: function (value) {
        return /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(value);
    },
    e_mail: function (value) {
        return /^[_a-zA-Z0-9-]+@[._a-zA-Z0-9-]+.[a-zA-Z]+$/.test(value);
    },
    check_age: function (value, limit_age) {
        var ageYear = 0;
        if (parseInt(value.substr(6, 1)) < 3) {
            ageYear = parseInt("19" + value.substr(0, 2));
        } else {
            ageYear = parseInt("20" + value.substr(0, 2));
        }
        ageMonth = parseInt(value.substr(2, 2));
        ageDay = parseInt(value.substr(4, 2));

        var today = new Date(); //현재날짜구하기

        var now_month = today.getMonth() + 1;
        var mage = today.getFullYear() - ageYear - 1; //현재나이구하기

        //월 비교 : 현재 달이 무조건 더 커야함
        if (now_month > ageMonth) {
            mage = mage + 1;
        }
        else {
            //같은 달인 경우 
            if (now_month - ageMonth == 0) {
                //일 비교 : 현재 날짜가 같거나 커야 함
                if (today.getDate() >= ageDay)
                    mage = mage + 1;
            }
        }
        // 나이 체크 체크
        if (mage < limit_age)
            return false;
        return true;
    },
    social_number: function (value) {
        a = new Array(13);
        for (var i = 0; i < 13; i++)
            a[i] = parseInt(value.charAt(i));
        var k = 11 - (((a[0] * 2) + (a[1] * 3) + (a[2] * 4) + (a[3] * 5) + (a[4] * 6) + (a[5] * 7) + (a[6] * 8) + (a[7] * 9) + (a[8] * 2) + (a[9] * 3) + (a[10] * 4) + (a[11] * 5)) % 11);
        if (k > 9) k -= 10;
        if (k != a[12]) return false;
        else return true;
    },
    gtcard: function (value) {
        return /^[A-Z]{5}$/i.test(value);
    },
    eggmoney: function (value) {
        return /^[A-Z0-9]{5}$/i.test(value);
    },
    evcard: function (value) {
        return /^[A-Z]{4}$/i.test(value);
    },
    okcash: function (value) {
        return /^[A-Z0-9]{5}$/i.test(value);
    },
    coupon: function (value) {
        return /^[A-Z0-9]{4}$/i.test(value);
    },
    key: function (e, keycode) {
        for (var i = 0; i < keycode.length; i++) {
            if (e.keyCode == keycode[i]) {
                if (window.event) { window.event.keyCode = ''; };
                return false;
            }
        }
        return true;
    }
}


function setCookie2(name, value) {
    var path = "/";
    var expires = 1;  //하루.
    var domain = "";

    var today = new Date();
    today.setDate(today.getDate() + expires);

    document.cookie = name + "=" + escape(value) + "; path=" + path;
}

function setCookie(name, value, expires, path, domain) {

    var argc = setCookie.arguments.length;
    var argv = setCookie.arguments;

    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;

    document.cookie = name + "=" + escape(value) +
			((expires == null) ? "" : ("; expires =" + expires.toGMTString())) +
			((path == null) ? "" : ("; path =" + path)) +
			((domain == null) ? "" : ("; domain =" + domain)) +
			((domain == true) ? "; secure" : "");
}

function getCookie(name) {
    var sCookieName = name + "=";
    var i = 0;
    var j;
    var endOfCookie;

    while (i <= document.cookie.length) {
        j = (i + sCookieName.length);

        if (document.cookie.substring(i, j) == sCookieName) {
            if ((endOfCookie = document.cookie.indexOf(";", j)) == -1) {
                endOfCookie = document.cookie.length;
            }
            return unescape(document.cookie.substring(j, endOfCookie));
        }

        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) {
            break;
        }
    }
    return "";
}


var CookieBuilder = function (cookieName, domain) {
    this.init(cookieName, domain);
};

CookieBuilder.prototype = {
    cookieName: null,

    domain: null,

    init: function (cookieName, domain) {
        this.cookieName = cookieName;
        this.domain = domain;
    },

    setValue: function (cookieValue, expiresMin) {

        // name,value
        var cookie = this.cookieName + "=" + escape(cookieValue);

        // path
        cookie += ';path=/'

        // expire
        if (expiresMin == null || expiresMin == 0) {
            var nowDate = new Date();
            var expireDate = new Date(nowDate.getTime() + (expiresMin * 60 * 1000));

            cookie += '; expires=' + expireDate.toGMTString();
        }

        //domain
        if (this.domain != null && this.domain != '') {
            cookie += ";domain=" + this.domain;
        }

        document.cookie = cookie;
    },

    removeCookie: function () {
        this.setValue('', -1);
    },

    getCookieValue: function (cookieName) {
        var sCookieName = cookieName + "=";
        var i = 0;
        var j;
        var endOfCookie;

        while (i <= document.cookie.length) {
            j = (i + sCookieName.length);

            if (document.cookie.substring(i, j) == sCookieName) {
                if ((endOfCookie = document.cookie.indexOf(";", j)) == -1) {
                    endOfCookie = document.cookie.length;
                }
                return unescape(document.cookie.substring(j, endOfCookie));
            }

            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) {
                break;
            }
        }
        return "";
    }

};

var scrollObj = function (targetEle, isVertical, sumMargin, movePx, startNum, interval, isInverse, stopDuration) {
    // 기본 오류 처리
    if (!document.getElementById) { return false; }
    if (!document.getElementsByTagName) { return false; }
    if (!document.getElementById(targetEle)) { return false; }

    // Private 변수: 오브젝트 선언 후 변경할 수 없음 
    // 스크롤할 요소(ul, ol 등)
    var targetEle = document.getElementById(targetEle);
    // 스크롤 방향 설정: false-가로, true-세로
    var isVertical = (typeof isVertical != "undefined") ? isVertical : false;
    // 리스트 요소(li)의 마진값
    var sumMargin = (typeof sumMargin != "undefined") ? sumMargin : 0;
    // 이동할 거리(단위: px)
    var movePx = (typeof movePx != "undefined") ? movePx : 1;
    // 
    var startNum = (typeof startNum != "undefined") ? startNum : 2;

    // Public 변수
    // 스크롤 시간 간격(단위: ms)
    this.interval = (typeof interval != "undefined") ? interval : 25;
    // 스크롤 방향 설정: false-left or top, true-right or bottom
    this.isInverse = (typeof isInverse != "undefined") ? isInverse : false;
    // 스크롤 도중 정지 시간(단위: ms)
    this.stopDuration = (typeof stopDuration != "undefined") ? stopDuration : 0;
    // 스크롤 정지 여부: false-스크롤, true-정지
    this.isStop = false;

    if (!targetEle.getElementsByTagName("li")) { return false; }

    var liArray = targetEle.getElementsByTagName("li");
    // 리스트 항목(li)은 최소 2개 이상이어야 함
    if (liArray.length < startNum || startNum < 2) { return false; }

    // 첫 번째 리스트 항목이 startNum 번째 오도록 순서 변경
    for (var i = 0; i < startNum - 1; i++) {
        targetEle.insertBefore(liArray[liArray.length - 1], liArray[0]);
    }
    // startNum 번째 항목 왼쪽 거리 계산해서 현재 위치로 설정(absolue positioning)
    var currentPos = 0;
    for (var j = 0; j < startNum - 1; j++) {
        currentPos -= (isVertical) ? (liArray[j].offsetHeight + sumMargin) : (liArray[j].offsetWidth + sumMargin);
    }
    // setTimeout을 호출하는 Private 함수(http://www.faqts.com/knowledge_base/view.phtml/aid/2311 참고)
    var scrollOn = function (sender, timerInterval) {
        var newThis = sender;
        window.setTimeout(function () { newThis.scrollStart() }, timerInterval);
    }

    // 이동 거리 초기화
    var stopDistance = 0;

    // 실제 스크롤시키는 Public method
    this.scrollStart = function () {
        if (!this.isStop) {
            var moveDistance = (this.isInverse) ? movePx : -movePx;
            // 현재 위치 변경
            currentPos = parseInt(currentPos) + moveDistance;
            // 이동 거리 변경
            stopDistance += moveDistance;
            // 기준 요소
            var indexEle = (this.isInverse) ? liArray[startNum - 2] : liArray[startNum - 1];
            var stopEleDim = (isVertical) ? indexEle.offsetHeight + sumMargin : indexEle.offsetWidth + sumMargin;
            // 다음 함수 호출 시간(stopDuration 적용 위함)
            var moveInterval = this.interval;
            // 이동한 거리가 기준 요소의 너비(또는 높이)와 일치할 경우
            if (Math.abs(stopDistance) >= stopEleDim) {
                var lastEleDim = (isVertical) ? liArray[liArray.length - 1].offsetHeight + sumMargin : liArray[liArray.length - 1].offsetWidth + sumMargin;
                var firstEleDim = (isVertical) ? liArray[0].offsetHeight + sumMargin : liArray[0].offsetWidth + sumMargin;
                // 반대 방향(right, bottom)이고 이동거리가 양수일 때(반대 방향 이동)
                if (this.isInverse && stopDistance > 0) {
                    // 마지막 요소가 맨 앞으로 오므로 마지막 요소의 너비(또는 높이)를 빼줌
                    currentPos -= lastEleDim;
                    // 이동 거리가 1보다 클 경우 오차 보정
                    currentPos -= (stopDistance - stopEleDim)
                    // 마지막 요소를 맨 앞으로 보냄
                    targetEle.insertBefore(liArray[liArray.length - 1], liArray[0]);
                    // 이동 거리 초기화
                    stopDistance = 0;
                    // 다음 실행 시간을 stopDuration으로 설정(잠시 정지시킴)
                    moveInterval = this.stopDuration;
                    // 반대의 경우
                } else if (!isInverse && stopDistance < 0) {
                    currentPos += firstEleDim;
                    currentPos -= (stopDistance + stopEleDim)
                    targetEle.appendChild(liArray[0]);
                    stopDistance = 0;
                    moveInterval = this.stopDuration;
                }
            }
            currentPos += "px";
            // 리스트의 절대 좌표 변경으로 스크롤 효과 발생
            if (isVertical) {
                targetEle.style.top = currentPos;
            } else {
                targetEle.style.left = currentPos;
            }
        }
        // setTimeout을 호출하는 scrollOn 함수 실행
        scrollOn(this, moveInterval);
    }
    // 오브젝스 선언과 함께 스크롤 자동 시작
    this.scrollStart();
}

var gboolStartFlag = false;
function GameStartRumbleAction() {
    if (gboolStartFlag) {
        return false;
    }

    //live=82 qa=12		
    var LauncherType = "82"

    location.href = "/launcher/launcher_chrome_rumble.aspx";
    return false;
}