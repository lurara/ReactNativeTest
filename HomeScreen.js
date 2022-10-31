import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

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
