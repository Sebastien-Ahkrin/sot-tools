import React from 'react';
import { Button, Text, View } from 'react-native';

import { cookingData } from '../cookingData';

export default function CookingTimer({ route }) {
  const {
    params: { foodKind },
  } = route;

  const datum = cookingData.find((cook) => cook.id === foodKind);
  if (!datum)
    throw new Error('Unreachable: cooking data not found for ' + foodKind);

  return (
    <View>
      <Text>
        TODO: cooking timer for {datum.name} ({datum.time})
      </Text>
    </View>
  );
}
