export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cd586195ba08e53ed226554',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages876-studio',
                  apiId: 'b03e9fe0-2a54-4966-b923-39bca911d343'
                },
                {
                  buildHookId: '5cd5861968eec60a52930537',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages876',
                  apiId: '9b5e6d79-06c3-4948-88e0-914cb11f2094'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nextjs-landing-pages876',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages876.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
