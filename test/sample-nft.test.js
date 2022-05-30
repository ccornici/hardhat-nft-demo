const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNft", () => {
  it('should mint and increment counter', async () => {
    // ARRANGE
    const contract = await ethers.getContractFactory('MyNft');
    const deployedContract = await contract.deploy();

    const accounts = await ethers.getSigners();
    const user = accounts[0];

    const startNftCount = await deployedContract.balanceOf(user.address);
    expect(startNftCount.toNumber(), 'Start balance should be 0').to.eql(0);

    // ACT
    await deployedContract.connect(user).mint();

    // ASSERT
    const endNftCount = await deployedContract.balanceOf(user.address);
    expect(endNftCount.toNumber(), 'End balance should be 1').to.eql(1);

    const tokenCounter = await deployedContract.getTokenCounter();
    expect(tokenCounter.toNumber()).to.eql(1);
  });
});