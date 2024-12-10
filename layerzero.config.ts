import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const mainnetContract: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'MyOFTAdapterUpgradeable',
}

const arbitrumContract: OmniPointHardhat = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'MyOFTUpgradeable',
}

const amoyContract: OmniPointHardhat = {
    eid: EndpointId.AMOY_V2_TESTNET,
    contractName: 'MyOFTUpgradeable',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: mainnetContract,
        },
        {
            contract: arbitrumContract,
        },
        {
            contract: amoyContract,
        },
    ],
    connections: [
        {
            from: mainnetContract,
            to: arbitrumContract,
        },
        {
            from: mainnetContract,
            to: amoyContract,
        },
        {
            from: arbitrumContract,
            to: mainnetContract,
        },
        {
            from: arbitrumContract,
            to: amoyContract,
        },
        {
            from: amoyContract,
            to: mainnetContract,
        },
        {
            from: amoyContract,
            to: arbitrumContract,
        },
    ],
}

export default config
