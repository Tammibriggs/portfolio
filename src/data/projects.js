// Temporary local project data — swap back to the GraphQL query later.
// `video` is optional: if present, it's shown instead of `image`.
const projects = [
    {
        name: "FluentDocs",
        description:
            "A devtool for real-world docs-as-code workflows to help keep docs accurate as code changes. It comes with a diff editor that lets you accept, discard, or modify AI-generated suggestions.",
        image: "/assets/fluentdocs.webp",
        video: "https://www.dropbox.com/scl/fi/z4egzyq8ngt7y4nbvnbxd/fluentdocs-short.mp4?rlkey=odizdtnm6zd84lepdaa46eml9&st=escv8aqa&dl=1", // omit this key to fall back to image
        githubLink: "https://github.com/Tammibriggs/fluentdocs",
        // projectLink: "https://tammibriggs-campus-store.vercel.app/",
        techIcons: {
            dark: ["/assets/next.png", "/assets/fastapi-black.svg", "/assets/gemini.png", "/assets/tailwind.png", "/assets/mongodb.png"],
            light: ["/assets/next.png", "/assets/fastapi-white.svg", "/assets/gemini.png", "/assets/mongodb.png"],
        },
    },
    {
        name: "3D Archipelago ",
        description: "Ever since I first came across Bruno Simon's 3D portfolio, I've wanted to build something as cool as it. So I finally did. Mine even includes an AI feature that lets you change the appearance of the scene based on the mood of an uploaded image.",
        image: "/assets/3d-portfolio.webp",
        // no video field — will just render the image
        video: "https://www.dropbox.com/scl/fi/rvjyp409ns4lyy2x7aoxj/3d-portfolio.mp4?rlkey=lrdfmmeygp3typmh1n03n0gy6&st=fgtswdc5&dl=1",
        githubLink: "https://github.com/Tammibriggs/3d-archipelago-portfolio",
        projectLink: "https://gemini-stylist-portfolio.vercel.app/",
        techIcons: {
            dark: ["/assets/next.png", "/assets/gemini.png", "/assets/threejs.png", "/assets/gsap.webp", "/assets/blender.png"],
            light: ["/assets/next.png", "/assets/gemini.png", "/assets/threejs.png", "/assets/gsap.webp", "/assets/blender.png"],
        },
    },
    {
        name: "Campus Store",
        description:
            "An e-commerce marketplace designed to help students access essential items at budget-friendly prices by offering second-hand alternatives.",
        image: "/assets/campus-store.jpeg",
        // video: "/assets/projects/project-one.mp4", // omit this key to fall back to image
        githubLink: "https://github.com/Tammibriggs/campusStore/tree/dev",
        projectLink: "https://tammibriggs-campus-store.vercel.app/",
        techIcons: {
            dark: ["/assets/next.png", "/assets/redux.svg", "/assets/tailwind.png", "/assets/mongodb.png"],
            light: ["/assets/next.png", "/assets/redux.svg", "/assets/tailwind.png", "/assets/mongodb.png"],
        },
    }
];

export default projects;