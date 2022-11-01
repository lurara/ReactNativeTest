import { Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native-web';
import styles from '../styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const userAction = async () => {
	const response = await fetch('https://api.jikan.moe/v4/anime/1/full');
	const myJson = await response.json(); //extract JSON from the http response
	console.log(myJson);
};
  

const AnimeScreen = () => {
	//userAction();
    const route = useRoute();
	let unparsedData, DATA;
	const navigation = useNavigation()
	const [hasNextPage, setHasNextPage] = useState(false);
	const [current_page, setPage] = useState(1);
	const [hasB4Page, setHasB4Page] = useState(false);
	const [animeList, setAnimeList] = useState([]);
	const [selectedAnime, setAnime] = useState(-1);

	const getAnime = async (path) => {
		try {
			const response = await 
			fetch(path).then((response) => 
				response.json()).then((json) => { 
					setHasNextPage(json.pagination.has_next_page);

					unparsedData = json.data;

					DATA = unparsedData.map(function(anime) {
						return {
							id: anime.mal_id,
							image: anime.images.jpg.image_url,
							title: anime.title
						};
					});


					setAnimeList(DATA);
				})
				.then(success => {
					console.log('Fetched anime');
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
		let path = 'https://api.jikan.moe/v4/anime?q=' + route.params.animeTitle 
			+ '&order_by=popularity';
		
		getAnime(path);
	}, []);

	// State Logic for Selected Variable
    useEffect(() => {
		if (selectedAnime != -1) {
        	console.log(selectedAnime, '- Has changed');
			goSelectedScreen();
		}
    },[selectedAnime]) 

	
    useEffect(() => {
		if(current_page != 1) setHasB4Page(true);
		else setHasB4Page(false);
    },[current_page]) 

	const goSelectedScreen = () => {
		navigation.navigate('Anime', {
		selectedAnime,
		});
	};

	// Page Management
	const goNextPage = () => {
		let cur_page = current_page+1;
		let path = 'https://api.jikan.moe/v4/anime?q=' + route.params.animeTitle 
			+ '&sfw=true'
			+ '&page=' + (cur_page);

		setPage(cur_page);

		console.log(path);
		
		getAnime(path);
	};

	const goBeforePage = () => {
		let cur_page = current_page-1;
		console.log('boo');
		let path = 'https://api.jikan.moe/v4/anime?q=' + route.params.animeTitle 
			+ '&sfw=true'
			+ '&page=' + cur_page;
		
		setPage(cur_page);

		console.log(path);
		
		getAnime(path);
	};


	return (
        <View style={styles.container}>
			<Text style={styles.title}>Search: {route.params.animeTitle}</Text>
			<FlatList data ={animeList} 
			numColumns={5}
			columnWrapperStyle={{justifyContent: 'space-between'}}
			renderItem={({ item }) => 
				<TouchableOpacity style={styles.listItem} onPress={() => {
					if(item.id == selectedAnime) 
						goSelectedScreen();
					else 
						setAnime(item.id);
					}}>
					<View style={styles.itemView}>
						<Image style={styles.image} source={{uri: item.image}}/>
						<Text style={styles.itemText}> {item.title}</Text>
					</View>
				</TouchableOpacity>
			}
			keyExtractor={item => item.id}/>
			<View style={styles.buttonsView}>
				{hasB4Page
				? <TouchableOpacity style={styles.backButton} onPress={goBeforePage}>
					<FontAwesome5 name="arrow-left" size={24} color="black" />
				  </TouchableOpacity>
				: <></>
				}
				{hasNextPage
				? <TouchableOpacity onPress={goNextPage}>
					<FontAwesome5 name="arrow-right" size={24} color="black" />
				  </TouchableOpacity>
				: <></>
				}
			</View>
        </View>
    );
};

export default AnimeScreen;