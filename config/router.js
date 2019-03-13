import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import { ListItemComponent, TodoComponent, LoginComponent, ProfileComponent } from '../components';

const TabNavigation = createBottomTabNavigator({
  ListItem: {
    screen: ListItemComponent,
  },
  Todo: {
    screen: TodoComponent,
  },
  Profile: {
    screen: ProfileComponent,
  }
});

const StackNavigation = createStackNavigator({
  Login: {
    screen: LoginComponent,
    navigationOptions: {
      header: null //this will hide the header
    }
  }
  // navigationOptions: ({ navigation }) => ({
  //   title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
  // }),
  // },
});

const createRootNavigator = (isLoggedIn = true) => {
  return createAppContainer(createSwitchNavigator(
    {
      StackNavigation: StackNavigation,
      TabNavigation: TabNavigation
    },
    {
      initialRouteName: isLoggedIn ? "TabNavigation" : "StackNavigation"
    }
  ))
}


// const SwitchNavigation = createSwitchNavigator({
//   StackNavigation: StackNavigation,
//   TabNavigation: TabNavigation
// },{
//   initialRouteName: 'TabNavigation',
// })

export default createRootNavigator;
// export default createAppContainer(createRootNavigator);