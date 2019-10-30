import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

//paginas
import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import SinginScreen from './pages/singin';
import CategoriasScreen from './pages/categorias';

const AuthStack = createStackNavigator({
    Sing: { screen: SinginScreen },
});

//criar a navegação
const MainNavigation = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
    categorias: {
        screen: CategoriasScreen,
    },
}, {


        tabBarOptions: {
            activeTintColor: '#000000',
            labelStyle: {
                fontSize: 20,
            },
            style: {
                backgroundColor: '#317E95',
            },
        }
    }

);



//container
export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigation,
            AuthStack,
        },
        {
            initialRouteName: "AuthStack"
        },
    ),
);