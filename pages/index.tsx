import Head from "next/head";
import Script from "next/script";
import GitHubCorner from "react-github-corner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faFileAlt} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <title>Make a README</title>

                {/* Search Engine */}
                <meta
                    name="description"
                    content="Learn how to make a great README for your programming project, and use the editable template to get started."
                />
                {/* Schema.org for Google */}
                <meta itemProp="name" content="Make a README" />
                <meta
                    itemProp="description"
                    content="Learn how to make a great README for your programming project, and use the editable template to get started."
                />
                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Make a README" />
                <meta
                    name="twitter:description"
                    content="Learn how to make a great README for your programming project, and use the editable template to get started."
                />
                <meta name="twitter:creator" content="@dannyguo" />
                {/* Open Graph general (Facebook, Pinterest & Google+) */}
                <meta property="og:title" content="Make a README" />
                <meta
                    property="og:description"
                    content="Learn how to make a great README for your programming project, and use the editable template to get started."
                />
                <meta property="og:url" content="https://www.makeareadme.com" />
                <meta property="og:site_name" content="Make a README" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://www.makeareadme.com/images/open-graph-logo.png?v=20181203"
                />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                {/* Flattr */}
                <meta name="flattr:id" content="g6gjzx" />

                <link
                    rel="icon"
                    type="image/x-icon"
                    href="images/favicon.ico"
                />

                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/hopscotch.min.css"
                />
            </Head>

            <GitHubCorner
                href="https://github.com/dguo/make-a-readme"
                bannerColor="#fff"
                octoColor="#404040"
            />

            <section className="hero is-dark is-medium is-bold">
                <div className="hero-body has-text-centered">
                    <span className="fa-layers fa-fw fa-5x">
                        <FontAwesomeIcon icon={faCircle} color="white" />
                        <FontAwesomeIcon
                            icon={faFileAlt}
                            transform="shrink-6"
                            color="hsl(0, 0%, 21%)"
                        />
                    </span>
                    <h1 className="title is-2">Make a README</h1>
                    <p className="subtitle is-4">
                        Because no one can read your mind (
                        <a id="yet" href="#mind-reading">
                            yet
                        </a>
                        )
                    </p>
                </div>
            </section>

            <div id="sponsor">
                <span>
                    <span className="sponsor-wrap">
                        <a
                            href="https://readme.com"
                            className="sponsor-img"
                            target="_blank"
                            rel="noopener sponsored"
                        >
                            <img
                                src="images/owlbert.jpg"
                                alt="ReadMe Owlbert"
                            />
                        </a>
                        <span className="sponsor-message">
                            Need an interactive developer hub, complete with
                            documentation, reference guides, tutorials, realtime
                            API logs and community?{" "}
                            <a
                                href="https://readme.com"
                                target="_blank"
                                rel="noopener sponsored"
                            >
                                Try ReadMe.com!
                            </a>
                        </span>
                    </span>
                    <small className="sponsor-disclaimer">
                        Make a README is proudly sponsored by ReadMe.com
                    </small>
                </span>
            </div>

            <div id="sponsor-separator"></div>

            <section className="section">
                <div className="container">
                    <h2 className="title is-3 has-text-centered">README 101</h2>

                    <h3 className="title is-4">What is it?</h3>
                    <p>
                        A{" "}
                        <a href="https://en.wikipedia.org/wiki/README">
                            README
                        </a>{" "}
                        is a text file that introduces and explains a project.
                        It contains information that is commonly required to
                        understand what the project is about.
                    </p>

                    <h3 className="title is-4">Why should I make it?</h3>
                    <p>
                        It's an easy way to answer questions that your audience
                        will likely have regarding how to install and use your
                        project and also how to collaborate with you.
                    </p>

                    <h3 className="title is-4">Who should make it?</h3>
                    <p>
                        Anyone who is working on a programming project,
                        especially if you want others to use it or contribute.
                    </p>

                    <h3 className="title is-4">When should I make it?</h3>
                    <p>
                        Definitely before you show a project to other people or
                        make it public. You might want to get into the habit of
                        making it the{" "}
                        <a href="http://tom.preston-werner.com/2010/08/23/readme-driven-development.html">
                            first file you create
                        </a>{" "}
                        in a new project.
                    </p>

                    <h3 className="title is-4">Where should I put it?</h3>
                    <p>
                        In the top level directory of the project. This is where
                        someone who is new to your project will start out. Code
                        hosting services such as{" "}
                        <a href="https://github.com/">GitHub</a>,{" "}
                        <a href="https://bitbucket.org/">Bitbucket</a>, and{" "}
                        <a href="https://about.gitlab.com/">GitLab</a> will also
                        look for your README and display it along with the list
                        of files and directories in your project.
                    </p>

                    <h3 className="title is-4">How should I make it?</h3>
                    <p>
                        While READMEs can be written in any text file format,
                        the most common one that is used nowadays is{" "}
                        <a href="https://en.wikipedia.org/wiki/Markdown">
                            Markdown
                        </a>
                        . It allows you to add some lightweight formatting. You
                        can learn more about it{" "}
                        <a href="http://commonmark.org/">here</a>, which also
                        has a helpful{" "}
                        <a href="http://commonmark.org/help/">
                            reference guide
                        </a>{" "}
                        and an{" "}
                        <a href="http://commonmark.org/help/tutorial/">
                            interactive tutorial
                        </a>
                        . Some other formats that you might see are{" "}
                        <a href="https://en.wikipedia.org/wiki/Text_file">
                            plain text
                        </a>
                        ,{" "}
                        <a href="https://en.wikipedia.org/wiki/ReStructuredText">
                            reStructuredText
                        </a>{" "}
                        (common in <a href="https://www.python.org/">Python</a>{" "}
                        projects), and{" "}
                        <a href="https://en.wikipedia.org/wiki/Textile_(markup_language)">
                            Textile
                        </a>
                        .
                    </p>
                    <p>
                        You can use any text editor. There are plugins for many
                        editors (e.g.{" "}
                        <a href="https://github.com/atom/markdown-preview">
                            Atom
                        </a>
                        ,{" "}
                        <a href="https://github.com/jrblevin/markdown-mode">
                            Emacs
                        </a>
                        ,{" "}
                        <a href="https://github.com/revolunet/sublimetext-markdown-preview">
                            Sublime Text
                        </a>
                        ,{" "}
                        <a href="https://github.com/suan/vim-instant-markdown">
                            Vim
                        </a>
                        , and{" "}
                        <a href="https://code.visualstudio.com/docs/languages/markdown#_markdown-preview">
                            Visual Studio Code
                        </a>
                        ) that allow you to preview Markdown while you are
                        editing it.
                    </p>
                    <p>
                        You can also use a dedicated Markdown editor like{" "}
                        <a href="https://typora.io/">Typora</a> or an online one
                        like <a href="https://stackedit.io/editor">StackEdit</a>{" "}
                        or <a href="http://dillinger.io/">Dillinger</a>. You can
                        even use the editable template below.
                    </p>
                </div>
            </section>

            <section id="template" className="section">
                <h2 className="title has-text-centered has-text-light">
                    Template
                </h2>

                <div className="columns">
                    <div className="column is-6">
                        <h3 className="title is-4 has-text-centered has-text-light">
                            Markdown Input (editable)
                        </h3>
                        <textarea
                            defaultValue={`
# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

\`\`\`bash
pip install foobar
\`\`\`

## Usage

\`\`\`python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
\`\`\`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)`}
                        />
                    </div>
                    <div className="column is-6">
                        <h3 className="title is-4 has-text-centered has-text-light">
                            Rendered
                        </h3>
                        <div id="rendered" className="markdown-body"></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="title is-3 has-text-centered">
                        Suggestions for a good README
                    </h2>

                    <p>
                        Every project is different, so consider which of these
                        sections apply to yours. The sections used in the
                        template are suggestions for most open source projects.
                        Also keep in mind that while a README can be too long
                        and detailed, too long is better than too short. If you
                        think your README is too long, consider utilizing{" "}
                        <a href="#more-documentation">
                            another form of documentation
                        </a>{" "}
                        rather than cutting out information.
                    </p>

                    <h3 className="title is-4">Name</h3>
                    <p>Choose a self-explaining name for your project.</p>

                    <h3 className="title is-4">Description</h3>
                    <p>
                        Let people know what your project can do specifically.
                        Provide context and add a link to any reference visitors
                        might be unfamiliar with. A list of <b>Features</b> or a{" "}
                        <b>Background</b> subsection can also be added here. If
                        there are alternatives to your project, this is a good
                        place to list differentiating factors.
                    </p>

                    <h3 className="title is-4">Badges</h3>
                    <p>
                        On some READMEs, you may see small images that convey
                        metadata, such as whether or not all the tests are
                        passing for the project. You can use{" "}
                        <a href="http://shields.io/">Shields</a> to add some to
                        your README. Many services also have instructions for
                        adding a badge.
                    </p>

                    <h3 className="title is-4">Visuals</h3>
                    <p>
                        Depending on what you are making, it can be a good idea
                        to include screenshots or even a video (you'll
                        frequently see GIFs rather than actual videos). Tools
                        like{" "}
                        <a href="https://github.com/icholy/ttygif">ttygif</a>{" "}
                        can help, but check out{" "}
                        <a href="https://asciinema.org/">Asciinema</a> for a
                        more sophisticated method.
                    </p>

                    <h3 className="title is-4">Installation</h3>
                    <p>
                        Within a particular ecosystem, there may be a common way
                        of installing things, such as using{" "}
                        <a href="https://yarnpkg.com">Yarn</a>,{" "}
                        <a href="https://www.nuget.org/">NuGet</a>, or{" "}
                        <a href="https://brew.sh/">Homebrew</a>. However,
                        consider the possibility that whoever is reading your
                        README is a novice and would like more guidance. Listing
                        specific steps helps remove ambiguity and gets people to
                        using your project as quickly as possible. If it only
                        runs in a specific context like a particular programming
                        language version or operating system or has dependencies
                        that have to be installed manually, also add a{" "}
                        <b>Requirements</b> subsection.
                    </p>

                    <h3 className="title is-4">Usage</h3>
                    <p>
                        Use examples liberally, and show the expected output if
                        you can. It's helpful to have inline the smallest
                        example of usage that you can demonstrate, while
                        providing links to more sophisticated examples if they
                        are too long to reasonably include in the README.
                    </p>

                    <h3 className="title is-4">Support</h3>
                    <p>
                        Tell people where they can go to for help. It can be any
                        combination of an issue tracker, a chat room, an email
                        address, etc.
                    </p>

                    <h3 className="title is-4">Roadmap</h3>
                    <p>
                        If you have ideas for releases in the future, it is a
                        good idea to list them in the README.
                    </p>

                    <h3 className="title is-4">Contributing</h3>
                    <p>
                        State if you are open to contributions and what your
                        requirements are for accepting them.
                    </p>
                    <p>
                        For people who want to make changes to your project,
                        it's helpful to have some documentation on how to get
                        started. Perhaps there is a script that they should run
                        or some environment variables that they need to set.
                        Make these steps explicit. These instructions could also
                        be useful to your future self.
                    </p>
                    <p>
                        You can also document commands to{" "}
                        <a href="https://stackoverflow.com/questions/8503559/what-is-linting">
                            lint the code
                        </a>{" "}
                        or{" "}
                        <a href="https://en.wikipedia.org/wiki/Test_automation">
                            run tests
                        </a>
                        . These steps help to ensure high code quality and
                        reduce the likelihood that the changes inadvertently
                        break something. Having instructions for running tests
                        is especially helpful if it requires external setup,
                        such as starting a{" "}
                        <a href="http://www.seleniumhq.org/">Selenium</a> server
                        for testing in a browser.
                    </p>

                    <h3 className="title is-4">Authors and acknowledgment</h3>
                    <p>
                        Show your appreciation to those who have contributed to
                        the project.
                    </p>

                    <h3 className="title is-4">License</h3>
                    <p>
                        For open source projects, say how it is{" "}
                        <a href="#license-1">licensed</a>.
                    </p>

                    <h3 className="title is-4">Project status</h3>
                    <p>
                        If you have run out of energy or time for your project,
                        put a note at the top of the README saying that
                        development has slowed down or stopped completely.
                        Someone may choose to fork your project or volunteer to
                        step in as a maintainer or owner, allowing your project
                        to keep going. You can also make an explicit request for
                        maintainers.
                    </p>
                </div>
            </section>

            <section id="faq" className="section">
                <h2 className="title has-text-centered has-text-light">FAQ</h2>

                <article className="message is-warning">
                    <h3 className="message-header">
                        Is there a standard README format?
                    </h3>
                    <div className="message-body">
                        Not all of the suggestions here will make sense for
                        every project, so it's really up to the developers what
                        information should be included in the README.
                    </div>
                </article>

                <article className="message is-warning">
                    <h3 className="message-header">
                        What are some other thoughts on writing READMEs?
                    </h3>
                    <div className="message-body">
                        Check out{" "}
                        <a href="https://github.com/matiassingers/awesome-readme">
                            Awesome README
                        </a>{" "}
                        for a list of more resources.
                    </div>
                </article>

                <article className="message is-warning">
                    <h3 className="message-header">
                        What should the README file be named?
                    </h3>
                    <div className="message-body">
                        <code>README.md</code> (or a different file extension if
                        you choose to use a non-Markdown file format). It is{" "}
                        <a href="https://softwareengineering.stackexchange.com/q/301691/298927">
                            traditionally uppercase
                        </a>{" "}
                        so that it is more prominent, but it's not a big deal if
                        you think it{" "}
                        <a href="https://github.com/sindresorhus/ama/issues/197">
                            looks better lowercase
                        </a>
                        .
                    </div>
                </article>

                <article className="message is-warning">
                    <h3 className="message-header">
                        What if I disagree with something, want to make a
                        change, or have any other feedback?
                    </h3>
                    <div className="message-body">
                        Please don't hesitate to open an{" "}
                        <a href="https://github.com/dguo/make-a-readme/issues">
                            issue
                        </a>{" "}
                        or{" "}
                        <a href="https://github.com/dguo/make-a-readme/pulls">
                            pull request
                        </a>
                        . You can also send me a message on{" "}
                        <a href="https://twitter.com/dannyguo">Twitter</a>.
                    </div>
                </article>

                <article className="message is-warning">
                    <h3 className="message-header">Mind reading?</h3>
                    <div className="message-body">
                        <a href="https://www.usatoday.com/story/tech/2014/04/22/mind-reading-brain-scans/7747831/">
                            Scientists
                        </a>{" "}
                        and companies like{" "}
                        <a href="https://www.theverge.com/2017/4/20/15375176/facebook-regina-dugan-interview-building-8-mind-reading-f8-2017">
                            Facebook
                        </a>{" "}
                        and <a href="https://www.neuralink.com/">Neuralink</a>{" "}
                        (presumably) are working on it. Perhaps in the future,
                        you'll be able to attach a copy of your thoughts and/or
                        consciousness to your projects. In the meantime, please
                        make READMEs.
                    </div>
                </article>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="title has-text-centered">What's next?</h2>

                    <h3 className="title is-4">License</h3>
                    <p>
                        If your project is{" "}
                        <a href="https://en.wikipedia.org/wiki/Open-source_software">
                            open source
                        </a>
                        , it's{" "}
                        <a href="https://blog.codinghorror.com/pick-a-license-any-license/">
                            important
                        </a>{" "}
                        to include a{" "}
                        <a href="https://en.wikipedia.org/wiki/Open-source_license">
                            license
                        </a>
                        . You can use{" "}
                        <a href="https://choosealicense.com/">this website</a>{" "}
                        to help you pick one.
                    </p>

                    <h3 className="title is-4">Changelog</h3>
                    <p>
                        Make a README is inspired by{" "}
                        <a href="http://keepachangelog.com/">
                            Keep a Changelog
                        </a>
                        . A{" "}
                        <a href="https://en.wikipedia.org/wiki/Changelog">
                            changelog
                        </a>{" "}
                        is another file that is very useful for programming
                        projects.
                    </p>

                    <h3 className="title is-4">More Documentation</h3>
                    <p>
                        A README is a crucial but basic way of documenting your
                        project. While every project should at least have a
                        README, more involved ones can also benefit from a{" "}
                        <a href="https://en.wikipedia.org/wiki/Wiki">wiki</a> or
                        a dedicated documentation website.{" "}
                        <a href="https://help.github.com/articles/about-github-wikis/">
                            GitHub
                        </a>
                        ,{" "}
                        <a href="https://confluence.atlassian.com/bitbucket/use-a-wiki-221449748.html">
                            Bitbucket
                        </a>
                        , and{" "}
                        <a href="https://docs.gitlab.com/ce/user/project/wiki/index.html">
                            GitLab
                        </a>{" "}
                        all support maintaining a wiki alongside your project,
                        and here are some tools and services that can help you
                        generate a documentation website:
                    </p>

                    <div className="content">
                        <ul>
                            <li>
                                <a href="https://dauxio.github.io/">Daux.io</a>
                            </li>
                            <li>
                                <a href="https://docusaurus.io/">Docusaurus</a>
                            </li>
                            <li>
                                <a href="https://www.gitbook.com/">GitBook</a>
                            </li>
                            <li>
                                <a href="https://www.mkdocs.org/">MkDocs</a>
                            </li>
                            <li>
                                <a href="https://readthedocs.org/">
                                    Read the Docs
                                </a>
                            </li>
                            <li>
                                <a href="https://readme.io/">ReadMe</a>
                            </li>
                            <li>
                                <a href="https://github.com/lord/slate">
                                    Slate
                                </a>
                            </li>
                            <li>
                                <a href="https://docsify.js.org/">Docsify</a>
                            </li>
                        </ul>
                    </div>

                    <h3 className="title is-4">Contributing</h3>
                    <p>
                        Just having a "Contributing" section in your README is a
                        good start. Another approach is to split off your
                        guidelines into their own file (
                        <code>CONTRIBUTING.md</code>). If you use GitHub and
                        have this file, then anyone who creates an issue or
                        opens a pull request{" "}
                        <a href="https://help.github.com/articles/setting-guidelines-for-repository-contributors/">
                            will get a link
                        </a>{" "}
                        to it.
                    </p>
                    <p>
                        You can also create an{" "}
                        <a href="https://help.github.com/articles/creating-an-issue-template-for-your-repository/">
                            issue template
                        </a>{" "}
                        and a{" "}
                        <a href="https://help.github.com/articles/creating-a-pull-request-template-for-your-repository/">
                            pull request template
                        </a>
                        . These files give your users and collaborators
                        templates to fill in with the information that you'll
                        need to properly respond. This helps to avoid situations
                        like getting very vague issues. Both GitHub and{" "}
                        <a href="https://docs.gitlab.com/ce/user/project/description_templates.html">
                            GitLab
                        </a>{" "}
                        will use the templates automatically.
                    </p>
                </div>
            </section>

            <footer
                id="footer"
                className="footer content has-text-centered has-background-light"
            >
                <p>
                    Make a README is maintained by{" "}
                    <a href="https://dannyguo.com">Danny Guo</a>, hosted on{" "}
                    <a href="https://github.com/dguo/make-a-readme">GitHub</a>{" "}
                    with a{" "}
                    <a href="https://github.com/dguo/make-a-readme/blob/main/LICENSE">
                        MIT license
                    </a>
                    , and powered by{" "}
                    <a href="https://www.netlify.com/">Netlify</a>.
                </p>
            </footer>

            <Script
                strategy="beforeInteractive"
                src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.1/anchor.min.js"
            />
            <Script
                strategy="beforeInteractive"
                src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js"
            />
            <Script
                strategy="beforeInteractive"
                src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js"
            />
            <Script
                strategy="beforeInteractive"
                src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/4.0.0/autosize.min.js"
            />
            <Script src="index.js" />
            <Script src="https://www.googletagmanager.com/gtag/js?id=UA-104519836-1" />
            <Script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    gtag("config", "UA-104519836-1");
                `}
            </Script>
        </>
    );
}
