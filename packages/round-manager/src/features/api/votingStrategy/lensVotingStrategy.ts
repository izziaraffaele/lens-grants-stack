import { Signer } from "@ethersproject/abstract-signer";
import { lensVotingStrategyFactoryContract } from "../contracts";
import { deployVotingContract } from "./baseVotingStrategy";

/**
 * Deploys a LensVotingStrategy contract by invoking the
 * create on LensCollectVotingStrategyFactory contract
 *
 * @param signerOrProvider
 * @returns
 */
export const deployLensVotingContract = async (
  signerOrProvider: Signer
): Promise<{ votingContractAddress: string }> => {
  try {
    const chainId = await signerOrProvider.getChainId();

    const lensVotingContract = lensVotingStrategyFactoryContract(chainId); //roundFactoryContract(chainId);
    return deployVotingContract(lensVotingContract, signerOrProvider);
  } catch (error) {
    console.error("deployLensVotingContract", error);
    throw new Error("Unable to create Lens voting contract");
  }
};
