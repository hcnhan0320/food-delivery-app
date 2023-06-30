import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppNav from './app/navigation';

export default function App() {
   const [fontsLoaded] = useFonts({
      'Poppins-Black': require('./app/assets/fonts/Poppins-Black.ttf'),
      'Poppins-Bold': require('./app/assets/fonts/Poppins-Bold.ttf'),
      'Poppins-ExtraBold': require('./app/assets/fonts/Poppins-ExtraBold.ttf'),
      'Poppins-ExtraLight': require('./app/assets/fonts/Poppins-ExtraLight.ttf'),
      'Poppins-Light': require('./app/assets/fonts/Poppins-Light.ttf'),
      'Poppins-Medium': require('./app/assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Regular': require('./app/assets/fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('./app/assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-Thin': require('./app/assets/fonts/Poppins-Thin.ttf'),
   });

   if (!fontsLoaded) {
      return null;
   }

   return <AppNav />;
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
