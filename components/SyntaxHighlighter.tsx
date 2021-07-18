import {LightAsync} from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
