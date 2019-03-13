import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store';

const { store, persistor } = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);

// const StyledLoaderContainer = styled.View`
//   justify-content: center;
//   align-items: center;
//   margin-top: 100px;
// `;

// const Loading = () => (
//     <StyledLoaderContainer>
//         <ActivityIndicator />
//         <Text>Initializing...</Text>
//     </StyledLoaderContainer>
// );
// setTimeout(() => {
//     persistor.purge()
//     .then(respose=> console.log("HEELO " ,respose))
//     .catch(err=> console.log("EEEeee " ,err))
// }, 2000);