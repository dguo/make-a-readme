import {LightAsync} from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";

// LightAsync.registerLanguage("python", python);
// Light.registerLanguage("javascript", javascript);

function SyntaxHighlighter(props) {
    return (
        <LightAsync
            language={props.language}
            style={a11yDark}
            children={props.value || ""}
        />
    );
}

export default SyntaxHighlighter;
