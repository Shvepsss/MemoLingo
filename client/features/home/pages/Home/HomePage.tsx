import { MainLayout } from 'app/shared/components/layout/MainLayout';
import { Button, Typography } from 'app/shared/components/ui';
import { APP_URL } from 'app/shared/constants/url';
import { useRouter } from 'app/shared/hooks/navigation';
// Not used right now in proper way  - now for navigation
import { useAuthLogic } from 'app/shared/providers/auth/useAuthLogic';

export const HomePage = () => {
  // PAGE IS USED FOR TESTING FUNCTIONALITY OF OTHER FEATURES NOW
  const router = useRouter();
  const { credentials, logout } = useAuthLogic();
  return (
    <MainLayout isScrollable={false} headerTitle="Memolingo">
      {credentials.userId ? (
        <>
          <Typography variant="largeRegular">Logged in as ${credentials.userId}</Typography>
          <Button title="Log out" onPress={logout} />
        </>
      ) : (
        <>
          <Typography variant="largeRegular">You are not logged in</Typography>

          <Button title="Log in" onPress={() => router.navigate(APP_URL.public.signIn.index)} />
        </>
      )}

      <Button title="Start lesson" onPress={() => router.navigate(APP_URL.private.lesson.index)} />
      <Button
        title="Log in"
        titleVariant="h3"
        onPress={() => router.navigate(APP_URL.public.signUp.profile)}
      />
      {/* <SectionList
        sections={[
          ...Section1Data,
          ...Section1Data,
          ...Section1Data,
          ...Section1Data,
          ...Section2Data,
        ]}
        renderItem={() => <SectionItem />}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} details={section.details} />
        )}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled
      /> */}
    </MainLayout>
  );
};
