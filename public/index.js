var CODEFUND_ELEMENT_ID = 'codefund';
var CODEFUND_EVENT_NAME = 'codefund';
var CODEFUND_SCRIPT_ID = 'codefund-script';

function removeElementById(id) {
    var element = document.getElementById(id);
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function loadCarbonAd() {
    var carbonStyleSheet = document.createElement('link');
    carbonStyleSheet.rel = 'stylesheet';
    carbonStyleSheet.href = 'carbon.css';
    document.head.appendChild(carbonStyleSheet);

    var carbonScript = document.createElement('script');
    carbonScript.id = '_carbonads_js';
    carbonScript.src =
        '//cdn.carbonads.com/carbon.js?serve=CK7ITK3N&placement=wwwmakeareadmecom';
    carbonScript.type = 'text/javascript';

    var adSeparator = document.getElementById('ad-separator');
    adSeparator.parentNode.insertBefore(carbonScript, adSeparator);
}

function fallBackToCarbon() {
    removeElementById(CODEFUND_ELEMENT_ID);
    removeElementById(CODEFUND_SCRIPT_ID);
    window.removeEventListener(CODEFUND_EVENT_NAME, handleCodeFundEvent);

    loadCarbonAd();
}

function handleCodeFundEvent() {
    if (event.detail.status === 'error') {
        console.error('CodeFund failed to load: ' + event.detail.message);
        fallBackToCarbon();
    } else if (event.detail.status === 'no-advertiser') {
        console.log("CodeFund doesn't have an available advertiser.");
        fallBackToCarbon();
    } else if (event.detail.status !== 'ok') {
        console.error('CodeFund has an unknown status: ' + event.detail.status);
        fallBackToCarbon();
    }
}

window.addEventListener(CODEFUND_EVENT_NAME, handleCodeFundEvent);

if (window.location.search) {
    var queryParams = window.location.search.substring(1).split('&');
    for (var i = 0; i < queryParams.length; i++) {
        var queryParam = queryParams[i].split('=');
        if (
            queryParam.length === 2 &&
            queryParam[0] === 'ad' &&
            queryParam[1] === 'carbon'
        ) {
            fallBackToCarbon();
        }
    }
}

anchors.options.placement = 'left';
// One of the longer FAQ questions doesn't work with the default
// truncate value. The anchor link looks fine, but Chrome doesn't
// jump to it when loading in a new tab.
anchors.options.truncate = 50;
anchors.add();

var md = new Remarkable({
    highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ''; // use external default escaping
    }
});

var rendered = document.querySelector('#rendered');
rendered.innerHTML = md.render(document.querySelector('textarea').textContent);

document.querySelector('textarea').addEventListener('keyup', function(e) {
    rendered.innerHTML = md.render(e.target.value);
});

autosize(document.querySelector('textarea'));
