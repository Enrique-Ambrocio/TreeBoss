const description = 'The Tree Boss is a full-service landscaping company with a straightforward and unique design/build philosophy. '

const title = 'The Tree Boss'

const titleTemplate = '%s | Professional Tree Arborist Services'

const url = 'https://thetreeboss.co'


export const nextSeoDefaultConfig = {
    additionalMetaTags: [
        {name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
    }
    ],
    canonical: url,
    description,
    openGraph: {
        description,
        images: [
          {
            alt: 'Tree Boss Logo',
            height: 1694,
            width: 2909,
          },
        ],
        locale: 'en_US',
        titleTemplate,
        title,
        type: 'website',
        url,
      },
      title,
      titleTemplate
}