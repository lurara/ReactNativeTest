import { Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import decide from './ShouldYouWatch';


const SelectedScreen = () => {
	//userAction();
	let unparsedData, DATA;
    const route = useRoute(); 
	const [animeStats, setAnimeStats] = useState({});
	const [user_recommendation, setRec] = useState('no');

	const getMetrics = async (path) => {
		try {
			const response = await 
			fetch(path).then((response) => 
				response.json()).then((json) => {

					unparsedData = json.data;
					
					let score, recommend, upperscore, downscore;
					score = upperscore = downscore = 0;
					recommend = false;

					for (let i = 0; i < json.data.scores.length; i++) {
						if(unparsedData.scores[i].score < 6)
							downscore += (unparsedData.scores[i].votes);
						else upperscore += (unparsedData.scores[i].votes);

						score += (unparsedData.scores[i].score)*unparsedData.scores[i].percentage;
					}

					score = score/100;
					
					if (upperscore > downscore) 
						recommend = true;

					DATA = {
						watching: unparsedData.watching,
						completed: unparsedData.completed,
						on_hold: unparsedData.on_hold,
						plan_to_watch: unparsedData.plan_to_watch,
						dropped: unparsedData.dropped,
						total: unparsedData.total,
						score: score,
						recommend: recommend,						
					};

					setAnimeStats(DATA);
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

	useEffect(() => {
		console.log(animeStats);
		if(animeStats != {})
			setRec(decide(animeStats));
	}, [animeStats]);

    return (
        <View style={styles.container}>

		<Text >{user_recommendation}</Text>
		<Text >{animeStats.score}</Text>
		<Text >Watching: {animeStats.watching}</Text>
		<Text >completed: {animeStats.completed}</Text>
		<Text >Dropped: {animeStats.dropped}</Text>
		<Text >On_Hold: {animeStats.on_hold}</Text>
		<Text >Total: {animeStats.total}</Text>
        <Text style={styles.title}>{route.params.title}</Text>
        </View>
    );
};

export default SelectedScreen;