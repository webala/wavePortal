const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners()
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed()

    console.log('Contract deployed to: ', waveContract.address)
    console.log("Contract deployed by: ", owner.address)

    let waveCount;
    waveCount = await waveContract.getTotalWaves()
    console.log(waveCount.toNumber())


    let waveTxn = await waveContract.wave("First wave!")
    await waveTxn.wait()

    

    waveTxn = await waveContract.connect(randomPerson).wave('A random wave from a random person')
    await waveTxn.wait()

   let allWaves = await waveContract.getAllWaves()
   console.log(allWaves)
   
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()