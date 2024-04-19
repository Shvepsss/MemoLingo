import { Typography, View, Button } from 'app/shared/components/ui';
import { ImageIcon } from 'app/shared/components/ui/ImageIcon';
import { useRouter } from 'app/shared/hooks/navigation';

export const HomePage = () => {
  const router = useRouter();

  return (
    <View style={{ gap: 10 }}>
      <Typography variant="h1" color="secondary100">
        It's home page
      </Typography>
      <Button
        onPress={() => router.navigate(APP_URL.private.search.index)}
        title="Go to search page"
      />
      <Button
        backgroundColor="error60"
        title="It s error button"
        onPress={() => {}}
        borderColor="primary100"
      />
      <Button
        backgroundColor="black0"
        title="Continue"
        onPress={() => {}}
        disabled
        borderColor="black60"
      />
      <Button
        title="Continue"
        onPress={() => {}}
        backgroundColor="black0"
        titleColor="black100"
        borderColor="primary60"
        radius="square"
      />
      <Button
        title="Continue"
        onPress={() => {}}
        backgroundColor="black0"
        titleColor="primary60"
        borderColor="primary60"
        radius="square"
      />
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageIcon icon="home" />
      </View>
    </View>
  );
};
