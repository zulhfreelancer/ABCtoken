var ABCtoken = artifacts.require("./ABCtoken.sol");

module.exports = function(deployer) {
  deployer.deploy(ABCtoken);
};
