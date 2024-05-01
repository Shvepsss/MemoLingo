import { MainLayout } from 'app/shared/components/layout/MainLayout';
import { Button, IconLocal, Typography, View } from 'app/shared/components/ui';
import { APP_URL } from 'app/shared/constants/url';
import { useRouter } from 'app/shared/hooks/navigation';
import * as S from 'app/shared/styles/@style-atoms';

const WELCOME_ICON_SIZE = 230;
const CONTAINER_GAP = 20;

export const StartPage = () => {
  const router = useRouter();
  return (
    <MainLayout isScrollable={false} headerTitle="Monolingo">
      <View style={{ ...S.flex.one, ...S.alignFlex.bothCenter, gap: CONTAINER_GAP }}>
        <IconLocal icon="welcome" size={WELCOME_ICON_SIZE} />
        <Typography variant="doubleExtraLargeRegular" style={{ textAlign: 'center' }}>
          The free, fun and effective way to boost up your language vocabulary
        </Typography>
        <Button
          title="Get Started"
          onPress={() => {
            router.navigate(APP_URL.public.signUp.profile);
          }}
        />
        <Button title="I've already have an account" onPress={() => {}} />
      </View>
    </MainLayout>
  );
};
