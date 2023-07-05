import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { CategoryMenuItem, Separator } from '../components';
import { Colors, Fonts, Mock } from '../constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const HomeScreen = () => {
   const [activeCategory, setActiveCategory] = useState('Chicken');

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.DEFAULT_GREEN}
            translucent
         />
         <Separator height={StatusBar.currentHeight} />
         <View style={styles.backgroundCurvedContainer} />
         <View style={styles.headerContainer}>
            <View style={styles.locationContainer}>
               <Ionicons
                  name="location-outline"
                  size={15}
                  color={Colors.DEFAULT_WHITE}
               />
               <Text style={styles.locationText}>Delivered to</Text>
               <Text style={styles.selectedLocationText}>HOME</Text>
               <MaterialIcons
                  name="keyboard-arrow-down"
                  size={16}
                  color={Colors.DEFAULT_YELLOW}
               />
               <Feather
                  name="bell"
                  size={24}
                  color={Colors.DEFAULT_WHITE}
                  style={{ position: 'absolute', right: 0 }}
               />
               <View style={styles.alertBadge}>
                  <Text style={styles.alertBadgeText}>12</Text>
               </View>
            </View>
            <View style={styles.searchContainer}>
               <View style={styles.searchSection}>
                  <Ionicons
                     name="search-outline"
                     size={25}
                     color={Colors.DEFAULT_GREY}
                  />
                  <Text style={styles.searchText}>Search..</Text>
               </View>
               <Feather
                  name="sliders"
                  size={20}
                  color={Colors.DEFAULT_YELLOW}
                  style={{ marginRight: 10 }}
               />
            </View>
            <View style={styles.categoryContainer}>
               {Mock.CATEGORIES.map(({ name, logo }) => (
                  <CategoryMenuItem
                     key={name}
                     name={name}
                     logo={logo}
                     activeCategory={activeCategory}
                     setActiveCategory={setActiveCategory}
                  />
               ))}
            </View>
         </View>
      </SafeAreaView>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.SECONDARY_WHITE,
   },
   backgroundCurvedContainer: {
      backgroundColor: Colors.DEFAULT_GREEN,
      height: 2000,
      width: 2000,
      position: 'absolute',
      top: -1 * (2000 - 240),
      borderRadius: 2000,
      alignSelf: 'center',
      zIndex: -1,
   },
   headerContainer: {
      justifyContent: 'space-evenly',
   },
   locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginHorizontal: 20,
   },
   locationText: {
      color: Colors.DEFAULT_WHITE,
      marginLeft: 5,
      fontSize: 13,
      lineHeight: 13 * 1.4,
      fontFamily: Fonts.POPPINS_MEDIUM,
   },
   selectedLocationText: {
      color: Colors.DEFAULT_YELLOW,
      marginLeft: 5,
      fontSize: 14,
      lineHeight: 14 * 1.4,
      fontFamily: Fonts.POPPINS_MEDIUM,
   },
   alertBadge: {
      borderRadius: 32,
      backgroundColor: Colors.DEFAULT_YELLOW,
      justifyContent: 'center',
      alignItems: 'center',
      height: 16,
      width: 16,
      position: 'absolute',
      right: -2,
      top: -10,
   },
   alertBadgeText: {
      color: Colors.DEFAULT_WHITE,
      fontSize: 10,
      lineHeight: 10 * 1.4,
      fontFamily: Fonts.POPPINS_BOLD,
   },
   searchContainer: {
      backgroundColor: Colors.DEFAULT_WHITE,
      height: 45,
      borderRadius: 8,
      marginTop: 20,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   searchSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
   },
   searchText: {
      color: Colors.DEFAULT_GREY,
      fontSize: 16,
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: 16 * 1.4,
      marginLeft: 10,
   },
   categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20,
   },
});
