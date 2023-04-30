import { Card, Flex } from '@saibase/uikit';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { LoadingView } from '~/components/LoadingView';
import { Table } from '~/components/Table';
import { ButtonGroup } from '~/components/controls/ButtonGroup';
import { useShips } from '~/hooks/useShips';
import { ShipTableRow, useShipsDealsStore } from '~/stores/useShipsDealsStore';
import { columns } from './columns';

export type MarketAction = 'buy' | 'sell';

export const ShipTable = () => {
  const { ships } = useShips();
  const fetchPrices = useShipsDealsStore((s) => s.fetch);

  const { data, atlasPrice, isFetching } = useShipsDealsStore();

  const [action, setAction] = useState<MarketAction>('buy');

  const intl = useIntl();

  const { locale } = useRouter();

  const cols: ColumnDef<ShipTableRow, any>[] = useMemo(
    () =>
      columns({
        action,
        locale,
        atlasPrice,
        formatMessage: intl.formatMessage,
      }),
    [action, atlasPrice, intl.formatMessage, locale]
  );

  const fetch = useCallback(() => {
    fetchPrices(ships);
  }, [fetchPrices, ships]);

  if (isFetching) {
    return <LoadingView />;
  }

  return (
    <Card border className="relative" p={5} mdP={8} direction="col">
      <ButtonGroup
        items={[
          ['buy', 'Ships.Table.Buy.action.title'],
          ['sell', 'Ships.Table.Sell.action.title'],
        ]}
        onAction={(action) => setAction(action as MarketAction)}
        selectedItem={action}
      />

      <Flex
        className="overflow-scroll space-y-5"
        direction="col"
        justify="center"
      >
        <Table columns={cols} data={data} fetchData={fetch} />
      </Flex>
    </Card>
  );
};
