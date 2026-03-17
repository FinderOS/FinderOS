import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('deploying FinderOS contracts')
  console.log('deployer:', deployer.address)
  console.log('network: base')

  // Deploy $FINDER token
  const FinderToken = await ethers.getContractFactory('FinderToken')
  const token = await FinderToken.deploy(deployer.address)
  await token.waitForDeployment()
  console.log('FinderToken deployed:', await token.getAddress())

  // Deploy Homescreen registry
  const FinderHomescreen = await ethers.getContractFactory('FinderHomescreen')
  const homescreen = await FinderHomescreen.deploy()
  await homescreen.waitForDeployment()
  console.log('FinderHomescreen deployed:', await homescreen.getAddress())

  console.log('still finding.')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
