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
	navigation.navigate('Search', {
	animeTitle, // message
	});
};

return (
    <View style={styles.container}>
        <Text style={styles.title}>Should You Watch?</Text>
        <View style={styles.subcontainer}>
          <Text style={styles.header}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vel scelerisque eros. 
            Vestibulum sollicitudin sit amet nulla eu pharetra. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vel scelerisque eros. 
            Vestibulum sollicitudin sit amet nulla eu pharetra.
          </Text>
        </View>
        <TextInput
        placeholder='Input Desired Anime'
        style={styles.input}
        value={animeTitle}
        onChangeText={(text) => setAnimeTitle(text)} /> 
        <Button title="Search" onPress={goAnimeScreen}/>
        <StatusBar style="auto" />
    </View>
);
};

export default HomeScreen;
