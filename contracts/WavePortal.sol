//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping(address => uint256) public waveCount;

    constructor() {
        console.log("Whatever i want");
    }

    function wave() public {
        totalWaves += 1;
        waveCount[msg.sender] += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getUserWaveCount(address _user) public view returns (uint256) {
        console.log("%s has %d waves", _user, waveCount[_user]);
        return waveCount[_user];
    }
}
