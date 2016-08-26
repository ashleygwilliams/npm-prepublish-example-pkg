const SassyMessage = require('./lib/SassyMessage');

const msg = new SassyMessage("dependencies' prepublish scripts run on install");
console.log(msg.print());
