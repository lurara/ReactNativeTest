import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import styles from '../style/styles'
import { decide, randomRecExpression } from '../ShouldYouWatch';
import ReuseButton from '../component/ReuseButton';


const SelectedScreen = () => {
	//userAction();
	let unparsedData, DATA;
    const route = useRoute(); 
	const [animeStats, setAnimeStats] = useState({});
	const [link, setLink] = useState("");
	const [user_recommendation, setRec] = useState("");

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
						if(unparsedData.scores[i].score < 7)
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
						score: score.toFixed(2),
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
		setLink('https://myanimelist.net/anime/' + route.params.selectedAnime);
		getMetrics(path);
	}, []);

	useEffect(() => {
		if(animeStats != {}) {
			let expr = randomRecExpression(decide(animeStats));
			setRec(expr);
		}

	}, [animeStats]);

    return (
		<View style={styles.container}>
			<Text style={styles.rec}>{user_recommendation}</Text>
			<Text style={styles.score}>Score: {animeStats.score}</Text>
			<Text >Completed: {animeStats.completed}</Text>
			<Text >Watching: {animeStats.watching}</Text>
			<Text >Dropped: {animeStats.dropped}</Text>
			<Text >On Hold: {animeStats.on_hold}</Text>
			<Text >Total: {animeStats.total}</Text>
			<Text style={styles.title}>{route.params.title}</Text>
			<ReuseButton text="Check it out on MyAnimeList!" link={link}/>
		</View>
    );
};

export default SelectedScreen;