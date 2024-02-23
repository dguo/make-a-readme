import {LightAsync} from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

function SyntaxHighlighter(props) {
    const {children, className, node, ...rest} = props;
    const match = /language-(\w+)/.exec(className || "");

    if (!children) {
        return null;
    }

    return (
        <LightAsync
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, "")}
            language={match?.[1] ?? "txt"}
            style={a11yDark}
        />
    );
}

export default SyntaxHighlighter;
