const stream = require('stream');
const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const log = new k8s.Log(kc);

const logStream = new stream.PassThrough();

logStream.on('data', (chunk) => {
	// use write rather than console.log to prevent double line feed
	process.stdout.write(chunk);
});

log.log('default', 'pod1', 'container', logStream, {follow: true, tailLines: 50, pretty: false, timestamps: false})
.catch(err => {
        console.log(err);
        process.exit(1);
})
.then(req => {
	// disconnects after 5 seconds
	if (req) {
		setTimeout(function(){
			req.abort();
		}, 5000);
	}
});
