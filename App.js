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
			backgroundColor: '#fc03a1',
		},
		headerTintColor: '#fff',
		}}>
		<Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="Search" component={AnimeScreen} />
		<Stack.Screen name="Anime" component={SelectedScreen} />
	</Stack.Navigator>
	</NavigationContainer>
);
}
