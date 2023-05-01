import classNames from 'classnames';
import { Flex } from '../Flex';
import { Text } from '../Text';

type Props = {
  items: [string, string][];
  onAction: (key: string) => void;
  selectedItem?: string;
};

export const ButtonGroup = ({ items, onAction, selectedItem }: Props) => {
  return (
    <Flex>
      <Flex
        className="bg-white rounded-xl shadow-sm space-x-2 bg-opacity-20"
        px={3}
        py={2}
      >
        {items.map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => onAction(key)}
            className={classNames(
              'py-2 px-3 text-sm rounded-xltext-gray-90 rounded-xl hover:bg-gray-200',
              { 'bg-white bg-opacity-90 ': selectedItem === key }
            )}
          >
            <Text weight={selectedItem === key ? 'bold' : 'semibold'}>
              {value}
            </Text>
          </button>
        ))}
      </Flex>
    </Flex>
  );
};
