// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title FinderToken
 * @notice $FINDER — FinderOS AI agent token on Base
 * @dev ERC-20, 0% tax, fixed supply
 *
 * For 40 years the Finder icon lived inside macOS.
 * On March 4, 2026 — .deploy
 * Mission: 2,000,000,000 Apple users onchain.
 */
contract FinderToken is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 * 10 ** 18;

    string public constant MISSION = "bring 2,000,000,000 Apple users onchain";
    uint256 public constant DEPLOY_TIMESTAMP = 1741046400; // March 4, 2026

    event MissionProgress(uint256 walletsOnboarded, uint256 remaining);

    constructor(address initialOwner) ERC20("FinderOS", "FINDER") Ownable(initialOwner) {
        _mint(initialOwner, TOTAL_SUPPLY);
    }

    /**
     * @notice Returns mission status
     */
    function status() external pure returns (string memory) {
        return "still finding.";
    }
}
