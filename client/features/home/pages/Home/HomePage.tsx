import { SectionList } from 'react-native';

import { MainLayout } from 'app/shared/components/layout/MainLayout';
import { Typography } from 'app/shared/components/ui';
import { SectionHeader } from 'app/shared/components/ui/SectionHeader';

import { Section1Data, Section2Data } from './mockData';

export const HomePage = () => {
  return (
    <MainLayout isScrollable={false} headerTitle="Memolingo">
      <SectionList
        sections={[
          ...Section1Data,
          ...Section1Data,
          ...Section1Data,
          ...Section1Data,
          ...Section2Data,
        ]}
        renderItem={({ item }) => <Typography variant="extraSmallRegular">{item.task}</Typography>}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} details={section.details} />
        )}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled
      />
    </MainLayout>
  );
};
