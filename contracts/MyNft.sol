// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNft is ERC721 {
    string public constant TOKEN_URI =
        "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";
    uint256 private _tokenCounter;

    constructor() ERC721("Dogie", "DOG") {
        _tokenCounter = 0;
    }

    function mint() public returns (uint256) {
        _safeMint(msg.sender, _tokenCounter);
        _tokenCounter++;
        return _tokenCounter;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return _tokenCounter;
    }
}
