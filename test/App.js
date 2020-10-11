//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
// import all basic components

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens
import Home from './pages/Home';
import Staff from './pages/Staff';
import Customer from './pages/Customer';

//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Forest Tour Home',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Second Option of Navigation Drawer
const Staff_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Staff,
    navigationOptions: ({ navigation }) => ({
      title: 'Staff',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Customer_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Customer,
    navigationOptions: ({ navigation }) => ({
      title: 'Customer',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavHome: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Forest Tour Home',
      },
    },
    NavStaff: {
      screen: Staff_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Staff',
      },
    },
    NavCustomer: {
      screen: Customer_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Customer',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);
export default createAppContainer(DrawerNavigatorExample);