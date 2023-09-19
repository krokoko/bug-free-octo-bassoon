import { awscdk } from 'projen';
//import { NpmConfig } from 'projen/lib/javascript';

// http://projen.io/api/API.html#class-awscdkconstructlibrary--
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Scott Schreckengaust',
  authorAddress: 'scottschreckengaust@users.noreply.github.com',
  cdkVersion: '2.94.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@scottschreckengaust/bug-free-octo-bassoon',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/scottschreckengaust/bug-free-octo-bassoon',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */

  minNodeVersion: '18.17.1',
  maxNodeVersion: '20.6.1',
  workflowNodeVersion: '18.x',

  //cdkVersionPinning: true,

  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmTokenSecret: 'GITHUB_TOKEN',

  codeCov: true,
  codeCovTokenSecret: 'CODECOV_TOKEN',

});
project.synth();