import Head from "next/head";
import Script from "next/script";
import GitHubCorner from "react-github-corner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faFileAlt} from "@fortawesome/free-solid-svg-icons";
import {PropsWithChildren} from "react";

import {Template} from "../components/Template";

type SectionProps = PropsWithChildren<{
    heading: string;
}>;

function Section(props: SectionProps) {
    return (
        <section className="flex justify-center pt-10 pb-6">
            <div className="max-w-prose">
                <h2>{props.heading}</h2>
                {props.children}
            </div>
        </section>
    );
}

type SectionItemProps = PropsWithChildren<{
    heading: string;
    isFAQ?: boolean;
}>;

function SectionItem(props: SectionItemProps) {
    return (
        <div className="mb-8 mx-4">
            <h3
                className={
                    props.isFAQ
                        ? "bg-yellow-300 px-6 py-3 mb-0 rounded-t-md text-lg"
                        : null
                }
            >
                {props.heading}
            </h3>
            {props.isFAQ ? (
                <div className="bg-yellow-50 px-6 pt-2 pb-4 rounded-b-md">
                    {props.children}
                </div>
            ) : (
                props.children
            )}
        </div>
    );
}

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

                <link
                    rel="icon"
                    type="image/x-icon"
                    href="images/favicon.ico"
                />
            </Head>

            <GitHubCorner
                href="https://github.com/dguo/make-a-readme"
                bannerColor="#fff"
                octoColor="#404040"
            />

            <header className="bg-gradient-to-br from-dark-gray via-medium-gray to-light-gray text-center text-white py-24">
                <span className="mb-6 fa-layers fa-fw fa-5x">
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon
                        icon={faFileAlt}
                        transform="shrink-6"
                        className="text-medium-gray"
                    />
                </span>
                <h1 className="mb-2">Make a README</h1>
                <p className="text-2xl">
                    Because no one can read your mind (
                    <a id="yet" href="#mind-reading" className="text-blue-400">
                        yet
                    </a>
                    )
                </p>
            </header>

            <aside id="ethicalads-section" className="flex justify-center">
                <div
                    className="horizontal"
                    data-ea-publisher="makeareadmecom"
                    data-ea-type="image"
                ></div>
            </aside>

            <Section heading="README 101">
                <SectionItem heading="What is it?">
                    <p>
                        A{" "}
                        <a href="https://en.wikipedia.org/wiki/README">
                            README
                        </a>{" "}
                        is a text file that introduces and explains a project.
                        It contains information that is commonly required to
                        understand what the project is about.
                    </p>
                </SectionItem>

                <SectionItem heading="Why should I make it?">
                    <p>
                        It's an easy way to answer questions that your audience
                        will likely have regarding how to install and use your
                        project and also how to collaborate with you.
                    </p>
                </SectionItem>

                <SectionItem heading="Who should make it?">
                    <p>
                        Anyone who is working on a programming project,
                        especially if you want others to use it or contribute.
                    </p>
                </SectionItem>

                <SectionItem heading="When should I make it?">
                    <p>
                        Definitely before you show a project to other people or
                        make it public. You might want to get into the habit of
                        making it the{" "}
                        <a href="http://tom.preston-werner.com/2010/08/23/readme-driven-development.html">
                            first file you create
                        </a>{" "}
                        in a new project.
                    </p>
                </SectionItem>

                <SectionItem heading="Where should I put it?">
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
                </SectionItem>

                <SectionItem heading="How should I make it?">
                    <p>
                        While READMEs can be written in any text file format,
                        the most common one that is used nowadays is{" "}
                        <a href="https://en.wikipedia.org/wiki/Markdown">
                            Markdown
                        </a>
                        . It allows you to add some lightweight formatting. You
                        can learn more about it at the{" "}
                        <a href="https://commonmark.org/">CommonMark website</a>
                        , which also has a helpful{" "}
                        <a href="https://commonmark.org/help/">
                            reference guide
                        </a>{" "}
                        and an{" "}
                        <a href="https://commonmark.org/help/tutorial/">
                            interactive tutorial
                        </a>
                        .
                    </p>
                    <p>
                        Some other formats that you might see are{" "}
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
                        like <a href="https://stackedit.io/app">StackEdit</a> or{" "}
                        <a href="http://dillinger.io/">Dillinger</a>. You can
                        even use the editable template below.
                    </p>
                </SectionItem>
            </Section>

            <Template />

            <Section heading="Suggestions for a good README">
                <p className="mb-8 mx-4">
                    Every project is different, so consider which of these
                    sections apply to yours. The sections used in the template
                    are suggestions for most open source projects. Also keep in
                    mind that while a README can be too long and detailed, too
                    long is better than too short. If you think your README is
                    too long, consider utilizing{" "}
                    <a href="#more-documentation">
                        another form of documentation
                    </a>{" "}
                    rather than cutting out information.
                </p>

                <SectionItem heading="Name">
                    <p>Choose a self-explaining name for your project.</p>
                </SectionItem>

                <SectionItem heading="Description">
                    <p>
                        Let people know what your project can do specifically.
                        Provide context and add a link to any reference visitors
                        might be unfamiliar with. A list of <b>Features</b> or a{" "}
                        <b>Background</b> subsection can also be added here. If
                        there are alternatives to your project, this is a good
                        place to list differentiating factors.
                    </p>
                </SectionItem>

                <SectionItem heading="Badges">
                    <p>
                        On some READMEs, you may see small images that convey
                        metadata, such as whether or not all the tests are
                        passing for the project. You can use{" "}
                        <a href="http://shields.io/">Shields</a> to add some to
                        your README. Many services also have instructions for
                        adding a badge.
                    </p>
                </SectionItem>

                <SectionItem heading="Visuals">
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
                </SectionItem>

                <SectionItem heading="Installation">
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
                </SectionItem>

                <SectionItem heading="Usage">
                    <p>
                        Use examples liberally, and show the expected output if
                        you can. It's helpful to have inline the smallest
                        example of usage that you can demonstrate, while
                        providing links to more sophisticated examples if they
                        are too long to reasonably include in the README.
                    </p>
                </SectionItem>

                <SectionItem heading="Support">
                    <p>
                        Tell people where they can go to for help. It can be any
                        combination of an issue tracker, a chat room, an email
                        address, etc.
                    </p>
                </SectionItem>

                <SectionItem heading="Roadmap">
                    <p>
                        If you have ideas for releases in the future, it is a
                        good idea to list them in the README.
                    </p>
                </SectionItem>

                <SectionItem heading="Contributing">
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
                </SectionItem>

                <SectionItem heading="Authors and acknowledgment">
                    <p>
                        Show your appreciation to those who have contributed to
                        the project.
                    </p>
                </SectionItem>

                <SectionItem heading="License">
                    <p>
                        For open source projects, say how it is{" "}
                        <a href="#license-1">licensed</a>.
                    </p>
                </SectionItem>

                <SectionItem heading="Project status">
                    <p>
                        If you have run out of energy or time for your project,
                        put a note at the top of the README saying that
                        development has slowed down or stopped completely.
                        Someone may choose to fork your project or volunteer to
                        step in as a maintainer or owner, allowing your project
                        to keep going. You can also make an explicit request for
                        maintainers.
                    </p>
                </SectionItem>
            </Section>

            <section
                id="faq"
                className="flex justify-center pt-10 pb-6 bg-medium-gray"
            >
                <div className="max-w-prose">
                    <h2 className="text-white">FAQ</h2>

                    <SectionItem
                        heading="Is there a standard README format?"
                        isFAQ
                    >
                        <p>
                            Not all of the suggestions here will make sense for
                            every project, so it's really up to the developers
                            what information should be included in the README.
                        </p>
                    </SectionItem>

                    <SectionItem
                        heading="What are some other thoughts on writing READMEs?"
                        isFAQ
                    >
                        <p>
                            Check out{" "}
                            <a href="https://github.com/matiassingers/awesome-readme">
                                Awesome README
                            </a>{" "}
                            for a list of more resources.
                        </p>
                    </SectionItem>

                    <SectionItem
                        heading="What should the README file be named?"
                        isFAQ
                    >
                        <p>
                            <code>README.md</code> (or a different file
                            extension if you choose to use a non-Markdown file
                            format). It is{" "}
                            <a href="https://softwareengineering.stackexchange.com/q/301691/298927">
                                traditionally uppercase
                            </a>{" "}
                            so that it is more prominent, but it's not a big
                            deal if you think it{" "}
                            <a href="https://github.com/sindresorhus/ama/issues/197">
                                looks better lowercase
                            </a>
                            .
                        </p>
                    </SectionItem>

                    <SectionItem
                        heading="What if I disagree with something, want to make a change, or have any other feedback?"
                        isFAQ
                    >
                        <p>
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
                        </p>
                    </SectionItem>

                    <SectionItem heading="Mind reading?" isFAQ>
                        <p>
                            <a href="https://www.usatoday.com/story/tech/2014/04/22/mind-reading-brain-scans/7747831/">
                                Scientists
                            </a>{" "}
                            and companies like{" "}
                            <a href="https://www.theverge.com/2017/4/20/15375176/facebook-regina-dugan-interview-building-8-mind-reading-f8-2017">
                                Facebook
                            </a>{" "}
                            and{" "}
                            <a href="https://www.neuralink.com/">Neuralink</a>{" "}
                            (presumably) are working on it. Perhaps in the
                            future, you'll be able to attach a copy of your
                            thoughts and/or consciousness to your projects. In
                            the meantime, please make READMEs.
                        </p>
                    </SectionItem>
                </div>
            </section>

            <Section heading="What's next?">
                <SectionItem heading="More Documentation">
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
                    <ul className="list-disc ml-8 my-4 space-y-3">
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
                            <a href="https://readthedocs.org/">Read the Docs</a>
                        </li>
                        <li>
                            <a href="https://readme.io/">ReadMe</a>
                        </li>
                        <li>
                            <a href="https://github.com/lord/slate">Slate</a>
                        </li>
                        <li>
                            <a href="https://docsify.js.org/">Docsify</a>
                        </li>
                    </ul>
                    <p>
                        And to learn more about technical documentation in
                        general, consider reading these books (I may earn
                        commissions if you buy through these links):
                    </p>
                    <ul className="list-disc ml-8 my-4 space-y-3">
                        <li>
                            <a href="https://www.amazon.com/Docs-Developers-Engineers-Technical-Writing/dp/1484272161?crid=3UFJEYT8RH8YE&keywords=docs+for+developers&qid=1693139345&sprefix=docs+for+developers%2Caps%2C388&sr=8-1&linkCode=ll1&tag=makeareadme-20&linkId=2a9cf45448f33a4b8445aff149d1b1de&language=en_US&ref_=as_li_ss_tl">
                                Docs for Developers: An Engineer’s Field Guide
                                to Technical Writing
                            </a>
                        </li>
                        <li>
                            <a href="https://www.amazon.com/Developing-Quality-Technical-Information-Handbook/dp/0133118975?crid=H49KJII3EIZ0&keywords=Developing+Quality+Technical+Information&qid=1693139665&sprefix=developing+quality+technical+information%2Caps%2C119&sr=8-1&linkCode=ll1&tag=makeareadme-20&linkId=98fdee518cca91c599b15bad8c4f8dd0&language=en_US&ref_=as_li_ss_tl">
                                Developing Quality Technical Information: A
                                Handbook for Writers and Editors
                            </a>
                        </li>
                        <li>
                            <a href="https://www.amazon.com/Docs-Like-Code-Collaborate-Documentation/dp/1387531492?crid=YXD5PKZUVZOU&keywords=docs+like+code&qid=1693139906&sprefix=docs+like+co%2Caps%2C340&sr=8-1&linkCode=ll1&tag=makeareadme-20&linkId=452497692487d954ffb6531d6352bfcc&language=en_US&ref_=as_li_ss_tl">
                                Docs Like Code: Collaborate and Automate to
                                Improve Technical Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://www.amazon.com/Product-Docs-technical-documentation-development/dp/B085KK6G8F?_encoding=UTF8&qid=1693139996&sr=8-1&linkCode=ll1&tag=makeareadme-20&linkId=dd5ac7674a48797a69c3f7fd51a72b80&language=en_US&ref_=as_li_ss_tl">
                                The Product is Docs: Writing Technical
                                Documentation in a Product Development Group
                            </a>
                        </li>
                    </ul>
                </SectionItem>

                <SectionItem heading="License">
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
                </SectionItem>

                <SectionItem heading="Changelog">
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
                </SectionItem>

                <SectionItem heading="Contributing">
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
                </SectionItem>
            </Section>

            <footer className="flex justify-center bg-gray-100 pt-2 pb-5">
                <div className="max-w-prose px-4">
                    <p>
                        Make a README is maintained by{" "}
                        <a href="https://dannyguo.com">Danny Guo</a>, hosted on{" "}
                        <a href="https://github.com/dguo/make-a-readme">
                            GitHub
                        </a>{" "}
                        with a{" "}
                        <a href="https://github.com/dguo/make-a-readme/blob/main/LICENSE">
                            MIT license
                        </a>
                        , and powered by{" "}
                        <a href="https://www.netlify.com/">Netlify</a>.
                    </p>
                    <p>
                        As an Amazon Associate, I earn from qualifying
                        purchases.
                    </p>
                </div>
            </footer>

            <Script
                strategy="beforeInteractive"
                src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.1/anchor.min.js"
            />
            <Script>
                {`
                    window.anchors.options.placement = "left";
                    // One of the longer FAQ questions doesn't work with the default
                    // truncate value. The anchor link looks fine, but Chrome doesn't
                    // jump to it when loading in a new tab.
                    window.anchors.options.truncate = 50;
                    window.anchors.add();

                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    gtag("config", "G-2BK72SW7BH");
                `}
            </Script>
            <Script
                src="https://media.ethicalads.io/media/client/ethicalads.min.js"
                onLoad={() => {
                    document
                        .getElementById("ethicalads-section")
                        .classList.add("border-b-2", "pt-2");
                }}
            />
            <Script
                src="/lava-cake/js/script.js"
                data-api="/lava-cake/api/event"
                data-domain="makeareadme.com"
            />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-2BK72SW7BH" />
        </>
    );
}
