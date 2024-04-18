import { Typography, View, VectorIcon } from 'app/shared/components/ui';
import { Button } from 'react-native-paper';
import { useRouter } from 'app/shared/hooks/navigation';
import { APP_URL } from 'app/shared/constants/url';

export const HomePage = () => {
  const router = useRouter();

  return (
    <View>
      <Typography variant="h1" color="secondary100">
        It's home page
      </Typography>
      <Button onPress={() => router.navigate(APP_URL.private.search.index)}>
        <Typography variant="h2" color="primary80">
          Go to search page
        </Typography>
      </Button>
      <VectorIcon iconName="audio" size={50} color="accentError" />
      <VectorIcon iconName="back" size={100} color="primary100" />
    </View>
  );
};
