// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title FinderHomescreen
 * @notice On-chain registry of onboarded Apple device wallets
 */
contract FinderHomescreen {
    struct AppEntry {
        address owner;
        string name;
        string url;
        string iconHash; // IPFS hash
        uint256 timestamp;
    }

    mapping(bytes32 => AppEntry) public apps;
    bytes32[] public appIds;
    mapping(address => bool) public onboarded;
    uint256 public totalOnboarded;

    event AppAdded(bytes32 indexed id, address indexed owner, string name);
    event WalletOnboarded(address indexed wallet, uint256 totalCount);

    function addApp(string calldata name, string calldata url, string calldata iconHash) external returns (bytes32) {
        bytes32 id = keccak256(abi.encodePacked(msg.sender, name, block.timestamp));
        apps[id] = AppEntry({
            owner: msg.sender,
            name: name,
            url: url,
            iconHash: iconHash,
            timestamp: block.timestamp
        });
        appIds.push(id);
        emit AppAdded(id, msg.sender, name);
        return id;
    }

    function removeApp(bytes32 id) external {
        require(apps[id].owner == msg.sender, "not owner");
        delete apps[id];
    }

    function recordOnboarding(address wallet) external {
        if (!onboarded[wallet]) {
            onboarded[wallet] = true;
            totalOnboarded++;
            emit WalletOnboarded(wallet, totalOnboarded);
        }
    }

    function getAppCount() external view returns (uint256) {
        return appIds.length;
    }
}
