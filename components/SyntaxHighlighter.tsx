import {LightAsync} from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

function SyntaxHighlighter(props) {
    const {children, className} = props;
    if (!children) {
        return null;
    }

    // An example className is "language-python"
    const languageMatch = /language-(\w+)/.exec(className || "");

    /* This is a simplified version of the example from the react-markdown docs:
       https://github.com/remarkjs/react-markdown?tab=readme-ov-file#use-custom-components-syntax-highlight

       If we have a language, we render it as a code block with syntax
       highlighting. Otherwise, we render an inline code element.

       One issue is that this approach doesn't handle a code block that doesn't
       have a language identifier, though GitHub supports that:
       https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#fenced-code-blocks

       It is rendered as an inline code element instead of a plain text code
       block. See this issue for more context:
       https://github.com/remarkjs/react-markdown/issues/776
    */
    return languageMatch ? (
        <LightAsync
            PreTag="div"
            children={children}
            language={languageMatch[1]}
            style={a11yDark}
        />
    ) : (
        <code className={className} children={children} />
    );
}

export default SyntaxHighlighter;
