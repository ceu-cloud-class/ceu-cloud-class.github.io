const config = {
    gatsby: {
        pathPrefix: '/static/',
        siteUrl: 'http://localhost:8000/',
        gaTrackingId: null,
        trailingSlash: false,
    },
    header: {

        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Central_European_University_Logo.svg/1280px-Central_European_University_Logo.svg.png',
        logoLink: 'https://ceu.edu/',
        title: "",
        githubUrl: 'https://github.com/zoltanctoth/ceu-cloud-class',
        helpUrl: '',
        tweetText: 'Big Data and Cloud Computing Courseware, https://github.com/zoltanctoth/ceu-cloud-class',
        social: `<li>
		  </li>
			<li>
		    <a href="https://ceu-bizanalytics.slack.com/#/" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://cdn-5dc591f7f911c91c58a5564e.closte.com/wp-content/uploads/2020/03/slack-icon.png' alt={'Slack'}/>
		      </div>
		    </a>
		  </li>`,
        links: [{ text: '', link: '' }],
        search: {
            enabled: false,
            indexName: 'prod_DE2',
            algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
            algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
            algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
        },
    },
    sidebar: {
        forcedNavOrder: [
            '/syllabus',
            '/internet', // add trailing slash if enabled above
            '/aws',
            '/serverless',
            '/resources',
        ],
        collapsedNav: [
            '/internet', // add trailing slash if enabled above
            '/aws',
            '/serverless',

        ],
        links: [{ text: '<- Go Back', link: 'http://localhost:8000/' }],
        frontline: false,
        ignoreIndex: true,
        title: "<a href='#'>CEU </a><div class='greenCircle'></div><a href='#'>Courseware</a>",
    },
    siteMetadata: {
        title: 'Data Engineering at Central European University',
        description: 'Big Data and Cloud Computing course delivered at Central European University',
        ogImage: null,
        docsLocation: 'https://github.com/zoltanctoth/ceu-cloud-bigdata-course/tree/master',
        favicon: 'https://media.glassdoor.com/sqll/591152/central-european-university-squarelogo-1430146462267.png',
    },
    pwa: {
        enabled: false, // disabling this will also remove the existing service worker.
        manifest: {
            name: 'CEU Data Engineering II',
            short_name: 'DE2',
            start_url: '/',
            background_color: '#6b37bf',
            theme_color: '#6b37bf',
            display: 'standalone',
            crossOrigin: 'use-credentials',
            icons: [{
                src: 'src/pwa-512.png',
                sizes: `512x512`,
                type: `image/png`,
            }, ],
        },
    },
};

module.exports = config;