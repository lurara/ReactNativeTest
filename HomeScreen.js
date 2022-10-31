import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
const [animeTitle, setAnimeTitle] = useState('');  
//const [message, setMessage] = useState('');
const navigation = useNavigation();

const goAnimeScreen = () => {
	navigation.navigate('Anime', {
	animeTitle, // message
	});
};

return (
    <View style={styles.container}>
        <Text style={styles.title}>ANIMU OTAKU WEEABOO YAY</Text>
        <TextInput
        placeholder='Input Desired Anime'
        style={styles.input}
        value={animeTitle}
        onChangeText={(text) => setAnimeTitle(text)} /> 
        <Button title="Submit" onPress={goAnimeScreen}/>
        <StatusBar style="auto" />
    </View>
);
};

	{/* <Text style={styles.title}>ANIMU OTAKU WEEABOO YAY</Text>
	<TextInput
		placeholder="Enter your message here"
		value={message}
		onChangeText={(text) => setMessage(text)}
		style={styles.input}
	/>
	<Button title="Submit"
		onPress={goAnimeScreen} color="green" />
	</View> */}

export default HomeScreen;

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
},
title: {
	fontSize: 40,
	fontWeight: 'bold',
	color: 'purple',
	marginTop: 50,
}  ,
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
