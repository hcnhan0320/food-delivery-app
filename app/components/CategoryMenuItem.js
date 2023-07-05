import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Colors, Fonts, Images } from '../constants';
import React from 'react';

const CategoryMenuItem = ({
   name,
   logo,
   activeCategory,
   setActiveCategory,
}) => {
   return (
      <TouchableOpacity
         key={name}
         style={styles.category()}
         onPress={() => {
            setActiveCategory(name);
         }}
      >
         <Image
            source={Images[logo]}
            style={styles.categoryIcon(activeCategory === name)}
         />
         <Text style={styles.categoryText(activeCategory === name)}>
            {name}
         </Text>
      </TouchableOpacity>
   );
};

export default CategoryMenuItem;

const styles = StyleSheet.create({
   category: (marginTop = 0) => ({
      alignItems: 'center',
      marginTop,
   }),
   categoryIcon: (isActive) => ({
      height: 30,
      width: 30,
      opacity: isActive ? 1 : 0.5,
   }),
   categoryText: (isActive) => ({
      fontSize: 10,
      lineHeight: 10 * 1.4,
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_WHITE,
      marginTop: 5,
      opacity: isActive ? 1 : 0.5,
   }),
});
