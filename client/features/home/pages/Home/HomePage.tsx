import { View } from 'app/shared/components/ui';
import { Button, Text } from 'react-native-paper';
import { useRouter } from 'app/shared/hooks/navigation';
import { APP_URL } from 'app/shared/constants/url';

export const HomePage = () => {
  const router = useRouter();

  return (
    <View>
      <Text>It's home page</Text>
      <Button onPress={() => router.navigate(APP_URL.private.search.index)}>
        <Text>Go to search page</Text>
      </Button>
    </View>
  );
};
