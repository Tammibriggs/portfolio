// Documentation case studies, in display order.
//
// The Docs page (/docs) shows every project. The home page shows the first
// two marked `featured: true` (topped up with unfeatured ones if fewer are
// featured) and links to the Docs page when there are more.
//
// To add a project, add an entry with these fields:
//   id           unique slug; also the anchor for /docs#<id>
//   name, kind   title, and a short label such as "Independent project"
//   featured     true to show it on the home page
//   summary      one or two sentences: what it is and what you did
//   problem, work, result
//                one short paragraph each, with numbers where you have them
//   image        the screenshot for wide screens (1000px and up): a 1000×625
//                area of the page captured at 2× (2000×1250), saved as
//                lossless WebP in public/assets/. Keep the area about 1000px
//                wide so its text shows near full size
//   imageMobile  optional, but recommended: the screenshot for narrower
//                screens, a 390×520 area of the page at a phone width captured
//                at 3× (1170×1560). Without it, those screens zoom into the
//                top left of `image`
//   imageAlt     what the screenshot shows
//   caption      optional: one line under the screenshot
//   url          the live docs; also the screenshot's link
//   before       optional: the docs as they were, shown on a "Before" tab
//                { image, imageMobile, imageAlt, caption, url }. Show the
//                same page or operation as `image`, captured at the same
//                size, so the two tabs compare like with like.
//   deliverables 2–4 docs to read: { type, description, link }
//   tools        short tool names, shown as tags
//   sourceLink   the repository
//
// Every number here comes from the project's own files: keep them in sync
// when a project changes.
export const docsProjects = [
  {
    id: "maritime",
    featured: true,
    name: "Maritime API reference",
    kind: "Independent project · Unofficial",
    summary:
      "An OpenAPI reference for 18 operations of the Maritime REST API, with a quickstart and a gap analysis of Maritime's own docs. Every operation was checked against live API calls.",
    // Source: GAP_ANALYSIS.md, the docs page column of the summary table
    // (11 of 18 with no response example; errors mentioned only for move,
    // file delete and webhook invoke)
    problem:
      "Maritime documents its API on one hand-written page. Most endpoints have no response example or schema, and only 3 of the 18 I covered mention any errors. To learn what an endpoint returns or how it fails, a developer has to call it and see.",
    work:
      "I built an OpenAPI 3.0.3 spec with request and response examples taken from real responses, rendered it with Scalar, and added a three-step quickstart. Each operation has an x-verification block that records what live tests confirmed and what's still unverified.",
    // Source: GAP_ANALYSIS.md, the contradictions table
    result:
      "Live testing found four places where Maritime's docs are wrong or misleading. For example, the Limits page says a request without an API key returns 401. It returns 403.",
    image: "/assets/maritime-after.webp",
    imageMobile: "/assets/maritime-after-mobile.webp",
    imageAlt:
      "The Create a directory operation in the Maritime API reference: a description, the path parameter, the request body, the response codes, and a curl example with its response",
    caption:
      "My reference: the same operation, with a request body, examples and 7 response codes.",
    url: "https://maritime-unofficial-docs.netlify.app/",
    before: {
      image: "/assets/maritime-before.webp",
      imageMobile: "/assets/maritime-before-mobile.webp",
      imageAlt:
        "Maritime's API page listing the file endpoints. The line for creating a folder, POST /api/agents/{agent_id}/files/mkdir, is outlined: it has no description, parameters or examples",
      caption: "Maritime's API page: the full entry for creating a folder.",
      url: "https://maritime.sh/docs/api",
    },
    deliverables: [
      {
        type: "API reference",
        description: "18 operations, each with notes on what live tests confirmed",
        link: "https://maritime-unofficial-docs.netlify.app/",
      },
      {
        type: "Quickstart",
        description: "From an empty environment to a working AI agent in three steps",
        link: "https://maritime-unofficial-docs.netlify.app/quickstart",
      },
      {
        type: "Gap analysis",
        description: "What Maritime's docs leave out, by operation and severity",
        link: "https://github.com/Tammibriggs/maritime-unofficial-openapi-spec/blob/main/GAP_ANALYSIS.md",
      },
      {
        type: "Test log",
        description: "Every live test, grouped by endpoint, and what's untested",
        link: "https://github.com/Tammibriggs/maritime-unofficial-openapi-spec/blob/main/TESTING.md",
      },
    ],
    tools: ["OpenAPI 3.0.3", "Scalar", "Redocly CLI", "Postman", "Python"],
    sourceLink: "https://github.com/Tammibriggs/maritime-unofficial-openapi-spec",
  },
  {
    id: "docscout",
    featured: true,
    name: "DocScout",
    kind: "My own tool · Open source",
    summary:
      "A tool that finds open-source projects whose API docs have gaps a writer can fix. I built it and wrote its docs: a command-line user guide, a skill for AI agents, and a report comparing the tool with an AI agent.",
    // Source: the DEV submission post and README
    problem:
      "Finding an open-source project to contribute API docs to means hours of checking repos by hand. Does it have an API? Is it maintained? Are the docs really missing? Will they merge a pull request from a stranger?",
    work:
      "I wrote a user guide that covers installing, setting up, running and reading the report, with a reference table for the main settings. I also wrote an Agent Skills file so AI agents like Claude Code can follow the same method, and a three-round comparison with the method fixed before each run.",
    // Source: docs/comparison/RESULTS.md, rounds 1 and 2
    result:
      "Between rounds 1 and 2 of the comparison, the share of DocScout's gap claims that were right rose from 50% to 81%, and 3 of its 4 picks were worth acting on.",
    image: "/assets/docscout.webp",
    imageMobile: "/assets/docscout-mobile.webp",
    imageAlt:
      "The DocScout website: a headline, the four checks every pick passes, and how DocScout works",
    url: "https://docscout-web.onrender.com/",
    deliverables: [
      {
        type: "User guide",
        description: "Install, set up, run daily and read the report",
        link: "https://github.com/Tammibriggs/doc-scout#readme",
      },
      {
        type: "AI agent skill",
        description: "The same method, written for an AI agent to follow",
        link: "https://github.com/Tammibriggs/doc-scout/blob/main/skills/find-api-docs-to-contribute/SKILL.md",
      },
      {
        type: "Comparison report",
        description: "DocScout against an AI agent with the skill, in three rounds",
        link: "https://github.com/Tammibriggs/doc-scout/blob/main/docs/comparison/RESULTS.md",
      },
      {
        type: "Website",
        description: "The hosted version, with the latest picks",
        link: "https://docscout-web.onrender.com/",
      },
    ],
    tools: ["Markdown", "Agent Skills", "Python", "Gemma 4"],
    sourceLink: "https://github.com/Tammibriggs/doc-scout",
  },
];

// The projects the home page shows: featured ones first, then the rest
export function getHomeDocsProjects(limit = 2) {
  const featured = docsProjects.filter((project) => project.featured);
  const others = docsProjects.filter((project) => !project.featured);
  return [...featured, ...others].slice(0, limit);
}

// Smaller docs-related work: tools for keeping docs accurate.
export const docsTooling = [
  {
    name: "FluentDocs",
    badge: "Docs-as-code tool",
    description:
      "Keeps docs accurate as code changes. A diff editor lets you accept, discard or edit each AI-suggested update.",
    image: "/assets/fluentdocs.webp",
    video:
      "https://www.dropbox.com/scl/fi/z4egzyq8ngt7y4nbvnbxd/fluentdocs-short.mp4?rlkey=odizdtnm6zd84lepdaa46eml9&st=escv8aqa&dl=1",
    links: [{ label: "Source on GitHub", href: "https://github.com/Tammibriggs/fluentdocs" }],
  },
  {
    name: "AutoDoc",
    badge: "Winner · Algolia MCP Server Challenge",
    highlight: true,
    description:
      "An AI agent that reads recent commits, finds the docs pages they affect, and suggests updates, so the docs don't fall behind the code.",
    links: [
      {
        label: "Read the write-up",
        href: "https://dev.to/tammibriggs/automate-doc-maintenance-detect-and-update-outdated-docs-using-algolia-mcp-server-n8n-and-llm-5bf7",
      },
    ],
  },
];

// Where my articles are published, from the article links in the CMS.
export const publications = [
  "LogRocket",
  "CSS-Tricks",
  "SitePoint",
  "Strapi",
  "Webiny",
  "ButterCMS",
  "CoderPad",
];
