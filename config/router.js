import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import { TodoContainer, ListItemContainer, ProfileContainer,LoginContainer } from '../container';

const TabNavigation = createBottomTabNavigator({
  ListItem: {
    screen: ListItemContainer,
  },
  Todo: {
    screen: TodoContainer,
  },
  Profile: {
    screen: ProfileContainer,
  }
});

const StackNavigation = createStackNavigator({
  Login: {
    screen: LoginContainer,
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