import React from 'react';
import { Button, View } from 'react-native';
import { cookingData } from '../cookingData';

export default function CookingTimers({ navigation }) {
  return (
    <View>
      {cookingData.map((datum) => (
        <Button
          key={datum.id}
          title={datum.name}
          onPress={() =>
            navigation.navigate('cookingTimer', { foodKind: datum.id })
          }
        />
      ))}
    </View>
  );
}
