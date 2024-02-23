import {LightAsync} from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

function SyntaxHighlighter(props) {
    const {children, className, node, ...rest} = props;
    const match = /language-(\w+)/.exec(className || "");

    if (!children) {
        return null;
    }

    return match ? (
        <LightAsync
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, "")}
            language={match[1]}
            style={a11yDark}
        />
    ) : (
        <code {...rest} className={className}>
            {children}
        </code>
    );
}

export default SyntaxHighlighter;
