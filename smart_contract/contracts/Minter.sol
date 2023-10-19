// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract Minter is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
 
    address payable owner;

    constructor() ERC721("SheerPay", "SPAY") {
        owner = payable(msg.sender);
    }

    event ReceivedEth(uint256 amount);

    event claimed(
      uint256 tokenId,
      address owner,
      uint256 dateCreated
        );

    receive() external payable  { 
        emit ReceivedEth(msg.value);
    }

    fallback() external payable {
        emit ReceivedEth(msg.value);
    }
    
     /* Mints a File*/
    function ClaimNFT() public payable returns (uint) {
      require(ERC721(address(this)).balanceOf(msg.sender) < 1, "Already minted to your wallet");

        require(_tokenIds.current() < 10000, "No more NFTs can be minted");
      _tokenIds.increment();
      uint256 newTokenId = _tokenIds.current();
        string memory tokenURI = "https://kezayya.infura-ipfs.io/ipfs/QmQDWyu9Myrmain5WjdP5rkuVQbS3rQTdTTrBuLeuYWShD";

      _mint(msg.sender, newTokenId);
      _setTokenURI(newTokenId, tokenURI);

      emit claimed(
        newTokenId,
        msg.sender,
        block.timestamp
      );
      return newTokenId;
    }

    
    function withdraw(uint value) external {
        require(msg.sender == owner, "Address is not the owner");
        require(value <= address(this).balance, "Value higher than balance.");

        (bool success, ) = owner.call{value: value}("");
        require(success, "There was an error!");
    }

}