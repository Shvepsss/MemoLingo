/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Provider } from 'app/shared/providers';
import React from 'react';
import { View } from 'app/shared/components/ui';
import { Text } from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <Provider>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Hello</Text>
      </View>
    </Provider>
  );
}

export default App;
