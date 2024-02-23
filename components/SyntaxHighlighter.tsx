import {LightAsync} from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

function SyntaxHighlighter(props) {
    const {children, className} = props;
    if (!children) {
        return null;
    }

    // An example className is "language-python"
    const languageMatch = /language-(\w+)/.exec(className || "");

    return (
        <LightAsync
            PreTag="div"
            children={children}
            language={languageMatch?.[1] ?? "txt"}
            style={a11yDark}
        />
    );
}

export default SyntaxHighlighter;
