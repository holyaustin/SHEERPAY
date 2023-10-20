import * as across from "@across-protocol/sdk-v2";

const { MerkleDistributor, MerkleTree, DistributionRecipient } = across.merkleDistributor;

const windowIndex = 0;
const recipients: DistributionRecipient[] = [
  {
    account: "0x00b591bc2b682a0b30dd72bac9406bfa13e5d3cd",
    accountIndex: 0,
    amount: "1000000000000000000",
    metadata: {
      amountBreakdown: {
        name: "5000000000000000",
      },
    },
  },
// ...other recipients data
];
const { merkleRoot, recipientsWithProofs } = MerkleDistributor.createMerkleDistributionProofs(recipients, windowIndex);