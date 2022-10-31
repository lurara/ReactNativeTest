import { StyleSheet, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';


const SelectedScreen = () => {
	//userAction();
	let unparsedData, DATA;
    const route = useRoute();
	const [animeStats, setAnimeStats] = useState({});

	const getMetrics = async (path) => {
		try {
			const response = await 
			fetch(path).then((response) => 
				response.json()).then((json) => {

					unparsedData = json.data;
					console.log(unparsedData);

					DATA = {
						watching: unparsedData.watching,
						completed: unparsedData.completed,
						on_hold: unparsedData.on_hold,
						plan_to_watch: unparsedData.plan_to_watch,
						dropped: unparsedData.dropped,
						total: unparsedData.total
					};

					setAnimeStats(DATA);
					console.log(animeStats);
				})
				.then(success => {
					console.log("Fetched anime stats");
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
		let path = 'https://api.jikan.moe/v4/anime/' + route.params.selectedAnime + '/statistics';
		getMetrics(path);
	}, []);


    return (
        <View style={styles.container}>
		<Text >{unparsedData}
		</Text>
		{/*  load dinamically the metrics here */}
        <Text style={styles.title}>{route.params.title}</Text>
        </View>
    );
};

export default SelectedScreen;

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
},
item: {
	padding: 20,
	fontSize: 15,
	marginTop: 5,
	color: 'black',
},
image: {
	width: 200,
	height: 200,
},  
title: {
	fontSize: 25,
	fontWeight: 'bold',
	color: 'blue',
	marginTop: 50,
},
});
