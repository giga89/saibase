import { Metaplex } from '@metaplex-foundation/js';
import { createError } from '@saibase/errors';
import { Cluster, Connection, PublicKey } from '@solana/web3.js';
import * as TE from 'fp-ts/TaskEither';

type Param = {
  address: PublicKey;
  cluster?: Cluster;
  connection: Connection;
  metaplex?: Metaplex;
  signal?: AbortSignal;
};

export const getNftByTokenAddress = ({
  address,
  connection,
  cluster = 'mainnet-beta',
  metaplex = Metaplex.make(connection, { cluster }),
  signal = new AbortController().signal,
}: Param) =>
  TE.tryCatch(
    () =>
      metaplex.nfts().findByToken(
        {
          token: address,
        },
        { signal }
      ),
    createError('NftFetchByTokenAddressError')
  );
