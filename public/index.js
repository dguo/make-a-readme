anchors.options.placement = "left";
// One of the longer FAQ questions doesn't work with the default
// truncate value. The anchor link looks fine, but Chrome doesn't
// jump to it when loading in a new tab.
anchors.options.truncate = 50;
anchors.add();

var md = new Remarkable({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ""; // use external default escaping
    }
});

var rendered = document.querySelector("#rendered");
rendered.innerHTML = md.render(document.querySelector("textarea").textContent);

document.querySelector("textarea").addEventListener("keyup", function (e) {
    rendered.innerHTML = md.render(e.target.value);
});

autosize(document.querySelector("textarea"));
