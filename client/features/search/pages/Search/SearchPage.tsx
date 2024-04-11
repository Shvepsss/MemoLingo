import { Button, Text } from 'react-native-paper';
import { View } from 'app/shared/components/ui';
import { useRouter } from 'app/shared/hooks/navigation';
import { APP_URL } from 'app/shared/constants/url';
export const SearchPage = () => {
  const router = useRouter();
  return (
    <View>
      <Text>It's search page</Text>
      <Button onPress={() => router.navigate(APP_URL.public.home.index)}>
        <Text>Go to home page</Text>
      </Button>
    </View>
  );
};
