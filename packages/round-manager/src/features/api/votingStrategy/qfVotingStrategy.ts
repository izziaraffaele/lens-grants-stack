import { Signer } from '@ethersproject/abstract-signer';
import { qfVotingStrategyFactoryContract } from '../contracts';
import { deployVotingContract } from './baseVotingStrategy';

/**
 * Deploys a QFVotingStrategy contract by invoking the
 * create on QuadraticFundingVotingStrategyFactory contract
 *
 * @param signerOrProvider
 * @returns
 */
export const deployQFVotingContract = async (
  signerOrProvider: Signer
): Promise<{ votingContractAddress: string }> => {
  try {
    const chainId = await signerOrProvider.getChainId();

    const qfVotingStrategyFactory = qfVotingStrategyFactoryContract(chainId); //roundFactoryContract(chainId);
    return deployVotingContract(qfVotingStrategyFactory, signerOrProvider);
  } catch (error) {
    console.error('deployQFVotingContract', error);
    throw new Error('Unable to create QF voting contract');
  }
};
