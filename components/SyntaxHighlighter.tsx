import {Light} from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";

Light.registerLanguage("python", python);
Light.registerLanguage("javascript", javascript);

function SyntaxHighlighter(props) {
    return (
        <Light
            language={props.language}
            style={a11yDark}
            children={props.value || ""}
        />
    );
}

export default SyntaxHighlighter;
