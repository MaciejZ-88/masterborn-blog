const config = {
  gatsby: {
    pathPrefix: '/blog',
    gaTrackingId: 'UA-140964154-1',
    siteUrl: process.env.GATSBY_ROOT_URL || 'http://localhost:3000',
  },
  env: {
    ROOT_URL: process.env.GATSBY_ROOT_URL || 'http://localhost:3000',
  },
  general: {
    githubRepoUrl: 'https://github.com/masterborn/masterborn-blog',
    markdownPath: 'src/content',
    githubProductionPath: 'tree/master',
  },
  siteMetadata: {
    title: 'Blog | MasterBorn - Creating Premium Software',
    description:
      "Let's start the journey of creating your software with Premium Professionals.",
  },
};

module.exports = config;
