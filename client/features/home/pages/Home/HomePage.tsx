import { SectionList } from 'react-native';

import { MainLayout } from 'app/shared/components/layout/MainLayout';
import { Button, Typography } from 'app/shared/components/ui';
import { SectionHeader } from 'app/shared/components/ui/SectionHeader';
import { APP_URL } from 'app/shared/constants/url';
import { useRouter } from 'app/shared/hooks/navigation';
import { useAuth } from 'app/shared/hooks/providers/useAuth';

import { SectionItem } from './Components/SectionItem';
import { Section1Data, Section2Data } from './mockData';

export const HomePage = () => {
  const { credentials, logout } = useAuth();
  const router = useRouter();

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
      <SectionList
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
      />
    </MainLayout>
  );
};
