export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e971ee9954f5a1782669056',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-a8uu9k6x',
                  apiId: 'b693a922-0644-4c7c-8c57-e61eae312229'
                },
                {
                  buildHookId: '5e971ee9f34cfafa4aaeb760',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-ig27jmjz',
                  apiId: '48ebd35a-ee81-43e8-acb4-6e7ba61a6029'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/damky/sanity-gatsby-blog-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-ig27jmjz.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
