import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Cooking timers"
        onPress={() => navigation.navigate('cookingTimers')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
