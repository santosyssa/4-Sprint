import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


//criar a navegação
const MainNavigation = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Profile: {
        screen: ProfileScreen,
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
export default createAppContainer(MainNavigation);