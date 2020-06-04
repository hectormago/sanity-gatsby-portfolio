export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed89fd968b3cf89b638aeb2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ak3gpw45',
                  apiId: 'ec5b624c-513b-497e-8cff-824ced6647ca'
                },
                {
                  buildHookId: '5ed89fdac44f69b33a62263a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hx87womo',
                  apiId: 'fd552ea3-99f5-48f4-b67a-c44de236a8ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hectormago/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hx87womo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
