import { Button, Card, Text } from '@saibase/uikit';
import { useUpdateSignature } from '~/hooks/useUpdateSignature';
import { Translation } from '~/i18n/Translation';

export const SignatureRefresher = () => {
  const updateSignature = useUpdateSignature();

  return (
    <Card
      p={5}
      direction="col"
      className="mx-auto space-y-3"
      justify="center"
      align="center"
    >
      <Text size="xl" color="text-white" weight="semibold">
        <Translation id="auth.sign.description" />
      </Text>

      <Button kind="neutral" size="small" onClick={updateSignature}>
        <Translation id="auth.sign.cta" />
      </Button>
    </Card>
  );
};
