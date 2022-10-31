import { Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native-web';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';


const userAction = async () => {
	const response = await fetch('https://api.jikan.moe/v4/anime/1/full');
	const myJson = await response.json(); //extract JSON from the http response
	// do something with myJson
	console.log(myJson);
};
  

const AnimeScreen = () => {
	//userAction();
    const route = useRoute();
	let unparsedData, DATA, hasNextPage;
	const navigation = useNavigation()
	const [animeList, setAnimeList] = useState([]);
	const [selectedAnime, setAnime] = useState(-1);

	const getAnime = async (path) => {
		try {
			const response = await 
			fetch(path).then((response) => 
				response.json()).then((json) => { 
					//console.log(json.data[0].title[0].title);
					//console.log(json.data[0].title);

					//setAnimeList(json.data);
					
					hasNextPage = json.pagination.has_next_page;
		
					unparsedData = json.data;
					console.log(unparsedData);
					//console.log(json);
				})
				.then(success => {
					DATA = unparsedData.map(function(anime) {
						return {
							id: anime.mal_id,
							image: anime.images.jpg.image_url,
							title: anime.title
						};
					});
					setAnimeList(DATA);
					console.log(DATA);
				})
				.catch((error) => {
					console.error(error);
					console.log(path);
				});
		
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		let path = 'https://api.jikan.moe/v4/anime?q=' + route.params.animeTitle;
		getAnime(path);
	}, []);

	// State Logic for Selected Variable
    useEffect(() => {
		// if not initial state
		if (selectedAnime != -1) {
        	console.log(selectedAnime, '- Has changed');
			goSelectedScreen();
		}
    },[selectedAnime]) 

	const goSelectedScreen = () => {
		navigation.navigate('Selected', {
		selectedAnime,
		});
	};

	return (
        <View style={styles.container}>
        <Text style={styles.title}>Search: {route.params.animeTitle}</Text>
			<FlatList data ={animeList} 
			renderItem={({ item }) => 
				<TouchableOpacity onPress={() => setAnime(item.id)}>
					<Text style={styles.item}>{item.title}</Text>
					<Image style={styles.image} source={{uri: item.image}}/>
				</TouchableOpacity>
			}
			keyExtractor={item => item.id}/>
        </View>
    );
};

export default AnimeScreen;