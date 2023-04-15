import { Signer } from "@ethersproject/abstract-signer";
import { ethers } from "ethers";
import { Contract } from "../types";

/**
 * Deploys a voting contract by invoking the
 * create on the factory contract
 *
 * @param signerOrProvider
 * @returns
 */
export const deployVotingContract = async (
  contract: Contract,
  signerOrProvider: Signer
): Promise<{ votingContractAddress: string }> => {
  const votingStrategyFactory = new ethers.Contract(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    contract.address!,
    contract.abi,
    signerOrProvider
  );

  // Deploy a new QF Voting Strategy contract
  const tx = await votingStrategyFactory.create();

  const receipt = await tx.wait();

  let votingContractAddress;

  if (receipt.events) {
    const event = receipt.events.find(
      (e: { event: string }) => e.event === "VotingContractCreated"
    );
    if (event && event.args) {
      votingContractAddress = event.args.votingContractAddress;
    }
  } else {
    throw new Error("No VotingContractCreated event");
  }

  console.log("✅ Voting Contract Transaction hash: ", tx.hash);
  console.log("✅ Voting Contract address: ", votingContractAddress);

  return { votingContractAddress };
};
