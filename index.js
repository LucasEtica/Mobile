import { AppRegistry, Platform } from 'react-native';
import Login from './src/Login';
import PaginaPrincipal from './src/PaginaPrincipal';
import AppNavigator from './src/AppNavigator';

AppRegistry.registerComponent('main', () => AppNavigator);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', { rootTag });
}
