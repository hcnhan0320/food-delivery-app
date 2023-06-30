import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Display } from '../utils';
import { Fonts, Images } from '../constants';
const OnboardingCard = ({ title, content, image }) => {
   return (
      <View style={styles.container}>
         <Image
            style={styles.image}
            source={Images[image]}
            resizeMode="contain"
         />
         <Text style={styles.titleText}>{title}</Text>
         <Text style={styles.contentText}>{content}</Text>
      </View>
   );
};

export default OnboardingCard;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: Display.setWidth(100),
      // height: Display.setHeight(100),
   },
   image: {
      height: Display.setHeight(30),
      width: Display.setWidth(70),
   },
   titleText: {
      fontSize: 22,
      fontFamily: Fonts.POPPINS_BOLD,
      paddingTop: 50,
   },
   contentText: {
      fontSize: 18,
      fontFamily: Fonts.POPPINS_LIGHT,
      textAlign: 'center',
      marginHorizontal: 20,
      bottom: 0,
      paddingTop: 50,
   },
});
