const metamaskController = require("../controller/metamask");

module.exports = (router) => {
  router.post('/metamask/sign', metamaskController.sign);
};

