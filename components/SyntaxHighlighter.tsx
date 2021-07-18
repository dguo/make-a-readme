import {Light} from "react-syntax-highlighter";
// import {a11yLight} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {gruvboxDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";

Light.registerLanguage("python", python);

function SyntaxHighlighter(props) {
    return (
        <Light
            language={props.language}
            style={gruvboxDark}
            children={props.value || ""}
        />
    );
}

export default SyntaxHighlighter;
