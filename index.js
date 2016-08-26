const log = require('console-log-level')({ level: 'info' })
const SassyMessage = require('./lib/SassyMessage');

const msg = new SassyMessage("dependencies' prepublish scripts run on install");
log.warn(msg.print());
