const core = require('@actions/core');
const github = require('@actions/github');



const { payload, ...context } = github.context;

const { commits } = payload;



console.log(commits)


