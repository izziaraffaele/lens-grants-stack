/**
 * This file contains all contract definitions for Gitcoin Grants Round Manager
 */

import abi from './abi';
import { Contract } from './types';
import { ChainId } from './utils';

/************************/
/* == External ABI == */
/************************/

/* GrantHub's ProjectRegistry */
export const projectRegistryContract = (
  chainId: ChainId | undefined
): Contract => {
  let address;

  switch (chainId) {
    case ChainId.MAINNET: {
      address = '0x03506eD3f57892C85DB20C36846e9c808aFe9ef4';
      break;
    }
    case ChainId.OPTIMISM_MAINNET_CHAIN_ID: {
      address = '0x8e1bD5Da87C14dd8e08F7ecc2aBf9D1d558ea174';
      break;
    }
    case ChainId.FANTOM_MAINNET_CHAIN_ID: {
      address = '0x8e1bD5Da87C14dd8e08F7ecc2aBf9D1d558ea174';
      break;
    }
    case ChainId.FANTOM_TESTNET_CHAIN_ID: {
      address = '0x984749e408FF0446d8ADaf20E293F2F299396631';
      break;
    }
    case ChainId.MUMBAI_CHAIN_ID: {
      address = '0x833d74951a27be359ccbf17ba5b41aa940a002f6';
      break;
    }
    case ChainId.GOERLI_CHAIN_ID:
    default: {
      address = '0xa71864fAd36439C50924359ECfF23Bb185FFDf21';
      break;
    }
  }

  return {
    address: address,
    abi: abi.projectRegistry,
  };
};

/* ERC20 */
export const ERC20Contract: Contract = {
  abi: abi.erc20,
};

/************************/
/* ===== Program ====== */
/************************/

/* ProgramFactory  */
export const programFactoryContract = (
  chainId: ChainId | undefined
): Contract => {
  let address;

  switch (chainId) {
    case ChainId.MAINNET: {
      address = '0x56296242CA408bA36393f3981879fF9692F193cC';
      break;
    }
    case ChainId.OPTIMISM_MAINNET_CHAIN_ID: {
      address = '0xd5Fb00093Ebd30011d932cB69bb6313c550aB05f';
      break;
    }
    case ChainId.FANTOM_MAINNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.FANTOM_TESTNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.MUMBAI_CHAIN_ID: {
      address = '0x679611a4df9bf645f4b099b005ec506f35a997f3';
      break;
    }
    case ChainId.GOERLI_CHAIN_ID:
    default: {
      address = '0x79Ba35cb31620db1b5b101A9A13A1b0A82B5BC9e';
      break;
    }
  }

  return {
    address: address,
    abi: abi.programFactory,
  };
};

/* ProgramImplementation */
export const programImplementationContract: Contract = {
  abi: abi.programImplementation,
};

/************************/
/* ====== Round ======= */
/************************/

/* RoundFactory  */
export const roundFactoryContract = (
  chainId: ChainId | undefined
): Contract => {
  let address;

  switch (chainId) {
    case ChainId.MAINNET: {
      address = '0x9Cb7f434aD3250d1656854A9eC7A71EceC6eE1EF';
      break;
    }
    case ChainId.OPTIMISM_MAINNET_CHAIN_ID: {
      address = '0x04E753cFB8c8D1D7f776f7d7A033740961b6AEC2';
      break;
    }
    case ChainId.FANTOM_MAINNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.FANTOM_TESTNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.MUMBAI_CHAIN_ID: {
      address = '0x49821900bc4a92c26fc17142baea10b490794be3';
      break;
    }
    case ChainId.GOERLI_CHAIN_ID:
    default: {
      address = '0x24F9EBFAdf095e0afe3d98635ee83CD72e49B5B0';
      break;
    }
  }

  return {
    address: address,
    abi: abi.roundFactory,
  };
};

/* RoundImplementation */
export const roundImplementationContract: Contract = {
  abi: abi.roundImplementation,
};

/************************/
/* == VotingStrategy == */
/************************/

/* QuadraticFundingVotingStrategy */
export const qfVotingStrategyFactoryContract = (
  chainId: ChainId | undefined
): Contract => {
  let address;

  switch (chainId) {
    case ChainId.MAINNET: {
      address = '0x4a850F463D1C4842937c5Bc9540dBc803D744c9F';
      break;
    }
    case ChainId.OPTIMISM_MAINNET_CHAIN_ID: {
      address = '0xE1F4A28299966686c689223Ee7803258Dbde0942';
      break;
    }
    case ChainId.FANTOM_MAINNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.FANTOM_TESTNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.MUMBAI_CHAIN_ID: {
      address = '0xFA8f0b9640dE7B220fD2D8815e2AD7Fb020c3d4c';
      break;
    }
    case ChainId.GOERLI_CHAIN_ID:
    default: {
      address = '0x06A6Cc566c5A88E77B1353Cdc3110C2e6c828e38';
      break;
    }
  }

  return {
    address: address,
    abi: abi.qfVotingStrategyFactory,
  };
};

export const lensVotingStrategyFactoryContract = (
  chainId: ChainId | undefined
): Contract => {
  let address;

  switch (chainId) {
    case ChainId.MAINNET: {
      address = '';
      break;
    }
    case ChainId.OPTIMISM_MAINNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.FANTOM_MAINNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.FANTOM_TESTNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.MUMBAI_CHAIN_ID: {
      address = '0x1db4df782fc162a50ea4f850dece74013e524d39';
      break;
    }
    case ChainId.GOERLI_CHAIN_ID:
    default: {
      address = '';
      break;
    }
  }

  return {
    address: address,
    abi: abi.qfVotingStrategyFactory,
  };
};

/************************/
/* == PayoutStrategy == */
/************************/

/* MerklePayoutStrategyFactory */
export const merklePayoutStrategyFactoryContract = (
  chainId: ChainId | undefined
): Contract => {
  let address;

  switch (chainId) {
    case ChainId.MAINNET: {
      address = '0x8F8d78f119Aa722453d33d6881f4D400D67D054F';
      break;
    }
    case ChainId.OPTIMISM_MAINNET_CHAIN_ID: {
      address = '0xB5365543cdDa2C795AD104F4cB784EF3DB1CD383';
      break;
    }
    case ChainId.FANTOM_MAINNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.FANTOM_TESTNET_CHAIN_ID: {
      address = '';
      break;
    }
    case ChainId.MUMBAI_CHAIN_ID: {
      address = '0x0d738f93eae8a4e614a81526969798d814aa095f';
      break;
    }
    case ChainId.GOERLI_CHAIN_ID:
    default: {
      address = '0xE2Bf906f7d10F059cE65769F53fe50D8E0cC7cBe';
      break;
    }
  }

  return {
    address: address,
    abi: abi.merklePayoutStrategyFactory,
  };
};

/* MerklePayoutStrategyImplementation */
export const merklePayoutStrategyImplementationContract: Contract = {
  abi: abi.merklePayoutStrategyImplementation,
};
