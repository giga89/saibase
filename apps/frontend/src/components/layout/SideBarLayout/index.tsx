import { Flex } from '@saibase/uikit';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { PropsWithChildren } from 'react';
import { SelfRetriever } from "../../SelfRetriever";
import { BaseLayout } from "../BaseLayout";
import { Container } from "../Container";
import { Header } from "../Header";
import { Provider } from './components/Provider';
import { SideBar } from './components/SideBar';
import { SidebarToggle } from './components/SidebarToggle';
import { TokenAmounts } from './components/TokenAmounts';

export const SideBarLayout = React.memo(
  ({ children }: PropsWithChildren<unknown>) => {
    const { connected } = useWallet();

    return (
      <Provider>
        <SideBar />

        <BaseLayout hasSidebar>
          <Header fluid fixed />

          <Container>
            <div className="pt-24 h-full relative container lg:px-5 lg:pl-80 mx-auto pb-32 sm:pb-28 lg:pb-0">
              <Flex className="space-x-5 lg:space-x-0" pb={5}>
                <SidebarToggle />

                {connected && (
                  <SelfRetriever>
                    <TokenAmounts />
                  </SelfRetriever>
                )}
              </Flex>

              {children}
            </div>
          </Container>
        </BaseLayout>
        {/* )} */}
      </Provider>
    );
  }
);

SideBarLayout.displayName = 'SideBarLayout';
