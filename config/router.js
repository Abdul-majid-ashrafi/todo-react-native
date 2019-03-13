import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import { ListItemComponent, TodoComponent, LoginComponent, ProfileComponent } from '../components';

const Tabs = createBottomTabNavigator({
  ListItem: {
    screen: ListItemComponent,
    navigationOptions: {
      title: 'List Item',
    },
  },
  Todo: {
    screen: TodoComponent,
    navigationOptions: {
      title: 'Todo',
    },
  },
  Profile: {
    screen: ProfileComponent,
    navigationOptions: {
      title: 'Profile',
    },
  }
});

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginComponent,
    navigationOptions: {
      header: null //this will hide the header
    },
  },
  Tabs: {
    screen: Tabs
  }
  // navigationOptions: ({ navigation }) => ({
  //   title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
  // }),
  // },
}, {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);