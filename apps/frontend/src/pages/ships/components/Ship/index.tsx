import { StarAtlasNft } from '@saibase/star-atlas';
import { Button, Card, Flex, TextColor } from '@saibase/uikit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { MaxWidth } from '~/components/layout/MaxWidth';
import { Translation } from '~/i18n/Translation';
import { isFirefox } from '~/utils/isFirefox';
import { Description } from './components/Description';
import { Heading } from './components/Heading';
import { Image } from './components/Image';
import { Polygon } from './components/Polygon';

type Props = { ship: StarAtlasNft };

const shipColors: { [key: string]: TextColor } = {
  'xx-small': 'text-white',
  'x-small': 'text-indigo-300',
  small: 'text-yellow-500',
  medium: 'text-emerald-500',
  large: 'text-pink-600',
  capital: 'text-purple-400',
  commander: 'text-red-600',
  titan: 'text-emerald-400',
};

export const ShipCard = ({ ship }: Props) => {
  const intl = useIntl();
  const { locale } = useRouter();

  const isF = isFirefox();

  const url = ship.markets.length
    ? `https://play.staratlas.com/market/${ship.name
        .toLowerCase()
        .replace(/\s/g, '-')}`
    : null;

  return (
    <Card direction="col" border>
      <div className="rounded-t-2xl overflow-hidden">
        <Image src={ship?.image} alt={ship?.name} />
      </div>

      <MaxWidth className="mx-auto" size="7xl">
        <div className="2xl:float-right relative pb-8 sm:pb-16 md:pb-20 lg:max-w-lg xl:max-w-2xl lg:w-full">
          <Polygon />

          <main className="relative z-10 pt-5 mx-auto w-full px-4 sm:pt-12 sm:px-6 md:pt-16 lg:px-8">
            <div className="xl:pl-40 sm:text-center lg:text-left">
              <Heading
                color={shipColors[ship?.attributes?.class?.toLowerCase()]}
                title={ship?.name}
                subtitle={ship?.attributes?.class}
              />
              <div className="mt-3 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                <Description
                  text={intl.formatMessage({
                    id: `Ships.Details.${ship.name
                      ?.toLocaleLowerCase()
                      .replace(/ /g, '_')}.description`,
                    defaultMessage: ship?.description,
                  })}
                />
              </div>
              <Flex
                direction="col"
                lgDirection="row"
                justify="center"
                lgJustify="start"
                className="mt-5 sm:mt-10"
              >
                {url && (
                  <Link href={url} target="_blank" rel="noreferrer">
                    <Button
                      kind="primary"
                      as="div"
                      className="w-full lg:w-auto"
                    >
                      <Translation id="Ships.List.Card.BuyAction.title" />
                    </Button>
                  </Link>
                )}
                <Flex className="mt-3 lg:ml-3 lg:mt-0 w-full">
                  <Link
                    href={{
                      pathname: '/ships/[id]',
                      query: { id: ship?._id },
                    }}
                    locale={locale}
                    className="w-full lg:w-auto"
                  >
                    <Button kind="tertiary" as="div">
                      <Translation id="Ships.List.Card.ReadMore.title" />
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </div>
          </main>
        </div>
      </MaxWidth>
    </Card>
  );
};
