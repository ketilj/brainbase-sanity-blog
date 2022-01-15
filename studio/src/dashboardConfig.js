export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61e2f69f9105798a3c12d4f7",
                  title: "Sanity Studio",
                  name: "brainbase-sanity-blog-studio",
                  apiId: "6c6aa3c9-cd24-4deb-b434-d89ee0071867",
                },
                {
                  buildHookId: "61e2f69f2224af6033fdaa8d",
                  title: "Blog Website",
                  name: "brainbase-sanity-blog",
                  apiId: "7b5ba1e2-2093-49da-8e3d-e7be31f10b34",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ketilj/brainbase-sanity-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://brainbase-sanity-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
