import React from 'react';
import * as Linking from 'expo-linking';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function ReuseButton(props) {
  const {text, link} = props;

  function onPress(link) {
    console.log('Redirecting to ' + link);
    Linking.openURL(link);
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => onPress(link)}>
        <Text style={styles.button}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ReuseButton

const styles = StyleSheet.create({
  button: {
    color: 'blue',
  },
  footer: {
    position: 'absolute',
    bottom: 2,
    marginVertical: 10,
  }
});