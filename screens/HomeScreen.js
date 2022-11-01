import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/styles'
import ReuseButton from '../component/ReuseButton';

const HomeScreen = () => {
const [animeTitle, setAnimeTitle] = useState('');  
const navigation = useNavigation();

const goAnimeScreen = () => {
	navigation.navigate('Search', {
	animeTitle, 
	});
};

return (
    <View style={styles.container}>
        <Text style={styles.title}>Should You Watch?</Text>
        <View style={styles.subcontainer}>
          <Text style={styles.header}>
            Este aplicativo faz requests à API Jikan a fim de determinar se
            um anime vale a pena ser assistido ou não. Ele se baseia tanto
            no score do anime quanto nas métricas da intenção das pessoas
            que interagem com o MyAnimeList.
          </Text>
        </View>
        <TextInput
        placeholder='Input Desired Anime'
        style={styles.input}
        value={animeTitle}
        onChangeText={(text) => setAnimeTitle(text)} /> 
        <Button title="Search" onPress={goAnimeScreen}/>
        <StatusBar style="auto" />
        <ReuseButton text='Check out the Jikan API' link='https://docs.api.jikan.moe/'/>
    </View>
);
};

export default HomeScreen;

