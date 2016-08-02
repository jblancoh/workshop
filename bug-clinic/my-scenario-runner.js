var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "scenario"});
log.info('hi');
log.warn({lang: 'es'}, 'revision');
