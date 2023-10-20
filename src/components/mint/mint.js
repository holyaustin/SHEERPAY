import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Minter from "src/artifacts/contracts/Minter.sol/Minter.json";
import { mantleAddress } from "src/config";
import { scrollAddress } from "src/config2";
import { mumbaiAddress } from "src/config3";


const Mint = async() => {
    try {
      const address = scrollAddress;

      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const connectedContract = new ethers.Contract(address, Minter.abi, provider.getSigner());
      console.log("Connected to Mantle contract", mantleAddress);
      console.log("Connected to Scroll contract", scrollAddress);
      console.log("Connected to mumbai contract", mumbaiAddress);

      const mintNFTTx = await connectedContract.ClaimNFT();
      await mintNFTTx.wait();
      console.log("NFT successfully claimed");
      toast("NFT successfully claimed!")

      return mintNFTTx;
    } catch (error) {
      //setErrorMessage("Failed to send tx to Base.");
      console.log(error);
    }

  return (
    <>

      <div className="flex justify-center bg-blue-100 text-black">
      <ToastContainer />
      </div>
    </>

  );
};
export default Mint;