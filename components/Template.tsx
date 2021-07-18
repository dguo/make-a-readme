import {useState} from "react";
import ReactMarkdown from "react-markdown";
import TextareaAutosize from "react-textarea-autosize";
import SyntaxHighlighter from "./SyntaxHighlighter";
// import foo from "remark-highlight.js";
// import rehypeHighlight from "rehype-highlight";

const initialTemplate = `# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

\`\`\`bash
pip install foobar
\`\`\`

## Usage

\`\`\`python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
\`\`\`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)`;

export function Template() {
    const [template, setTemplate] = useState(initialTemplate);

    return (
        <section id="template" className="bg-medium-gray pb-10">
            <h2 className="text-white pt-10">Template</h2>

            <div className="flex justify-center flex-wrap">
                <div className="flex-1 m-3 max-w-5xl">
                    <p className="text-white text-center text-xl font-bold mt-0 mb-4">
                        <label htmlFor="markdown-input">
                            Markdown Input (editable)
                        </label>
                    </p>
                    <TextareaAutosize
                        id="markdown-input"
                        className="bg-white w-full px-4 py-6 rounded-lg font-mono text-sm"
                        value={template}
                        onChange={(event) => {
                            setTemplate(event.target.value);
                        }}
                    />
                </div>
                <div className="flex-1 m-3 max-w-5xl">
                    <p className="text-white text-center text-xl font-bold mt-0 mb-4">
                        Rendered
                    </p>
                    <div
                        id="rendered"
                        className="markdown-body bg-white p-4 rounded-lg"
                    >
                        <ReactMarkdown renderers={{code: SyntaxHighlighter}}>
                            {/* <ReactMarkdown
                            // remarkPlugins={[[foo, {include: ["JavaScript"]}]]}
                            rehypePlugins={[
                                [
                                    rehypeHighlight,
                                    {
                                        ignoreMissing: true,
                                        languages: {
                                            python: require("highlight.js/lib/languages/python")
                                        }
                                    }
                                ]
                            ]}
                        > */}
                            {template}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </section>
    );
}
