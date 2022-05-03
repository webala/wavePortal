const main = async () => {

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1")
    });
    await waveContract.deployed()

    console.log('Contract deployed to: ', waveContract.address)
    
    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    )

    console.log('Contract balance: ', hre.ethers.utils.formatEther(contractBalance))
 


    let waveTxn1 = await waveContract.wave("First wave!")
    await waveTxn1.wait()

    let waveTxn2 = await waveContract.wave("First wave!")
    await waveTxn2.wait()

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    )
    console.log('Contract balance: ', hre.ethers.utils.formatEther(contractBalance))



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