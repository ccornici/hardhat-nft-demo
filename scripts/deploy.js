const { ethers, network } = require("hardhat");

async function deploy() {
  const contractFactory = await ethers.getContractFactory("MyNft");

  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log(`Deployed contract to: ${contract.address}`)

  // what happens when we deploy to our hardhat network?
  if (network.config.chainId === 4) {
    console.log("Waiting for block confirmations");
    await contract.deployTransaction.wait(6);
  }

  // call mint here
  const res = await contract.mint();
  console.log("Result", res);
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })