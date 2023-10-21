import { Cluster, clusterApiUrl } from '@solana/web3.js';

export interface EndpointInfo {
  cluster: Cluster;
  name: string;
  url: string;
}

export const clusterEndpoints: EndpointInfo[] = [
  {
    cluster: 'mainnet-beta',
    name: 'Mainnet',
    url: process.env.RPC_API_BASE_URL || clusterApiUrl('mainnet-beta'),
  },
  {
    cluster: 'devnet',
    name: 'Devnet',
    url: process.env.DEVNET_RPC_ENDPOINT || clusterApiUrl('devnet'),
  },
  {
    cluster: 'testnet',
    name: 'Testnet',
    url: clusterApiUrl('testnet'),
  },
];

export function getConnectionContext(cluster?: Cluster): EndpointInfo {
  const endpoint =
    clusterEndpoints.find((e) => e.cluster === cluster) || clusterEndpoints[0];

  return endpoint;
}

export const getConnectionClusterUrl = (cluster?: Cluster) => {
  return getConnectionContext(cluster).url;
};
