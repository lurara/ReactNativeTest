import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AnimeScreen from './AnimeScreen';
import SelectedScreen from './SelectedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
return (
	<NavigationContainer>
	<Stack.Navigator
		screenOptions={{
		headerStyle: {
			backgroundColor: 'green',
		},
		headerTintColor: '#fff',
		}}>
		<Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="Anime" component={AnimeScreen} />
		<Stack.Screen name="Selected" component={SelectedScreen} />
	</Stack.Navigator>
	</NavigationContainer>
);
}
