import "bulma/css/bulma.min.css";
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/a11y-light.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
// Skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

import "../index.css";

export default function App({Component, pageProps}) {
    return <Component {...pageProps} />;
}
