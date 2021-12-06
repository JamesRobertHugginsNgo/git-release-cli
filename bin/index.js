const gitRelease = require('git-release');

const [branch, increment] = process.argv;

gitRelease(branch, increment).then(() => {
	console.log('COMPLETE');
}, () => {
	console.error('ERROR');
});
