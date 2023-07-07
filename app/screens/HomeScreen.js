import React, { useState, useEffect } from 'react';
import {
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   SafeAreaView,
   StatusBar,
   ScrollView,
   FlatList,
} from 'react-native';
import {
   CategoryMenuItem,
   RestaurantCard,
   RestaurantMediumCard,
   Separator,
} from '../components';
import { Colors, Fonts, Mock } from '../constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { RestaurantService } from '../services';
import { Display } from '../utils';

const sortBorderStyle = (isActive) =>
   isActive
      ? styles.sortListItem
      : {
           ...styles.sortListItem,
           borderBottomColor: Colors.DEFAULT_WHITE,
        };
const sortTextStyle = (isActive) =>
   isActive
      ? styles.sortListItemText
      : {
           ...styles.sortListItemText,
           color: Colors.DEFAULT_GREY,
        };
const HomeScreen = ({ navigation }) => {
   const [activeCategory, setActiveCategory] = useState('Chicken');
   const [restaurants, setRestaurants] = useState(null);
   const [activeSortItem, setActiveSortItem] = useState('Recent');

   useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
         RestaurantService.getRestaurants().then((response) => {
            if (response?.status) {
               setRestaurants(response?.data);
            }
         });
      });
      return unsubscribe;
   }, []);

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
         <ScrollView style={styles.listContainer}>
            <View style={styles.horizontalListContainer}>
               <View style={styles.listHeader}>
                  <Text style={styles.listHeaderTitle}>Top Rated</Text>
                  <Text style={styles.listHeaderSubTitle}>See All</Text>
               </View>
               <FlatList
                  data={restaurants}
                  keyExtractor={(item) => item?.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListHeaderComponent={() => <Separator width={20} />}
                  ListFooterComponent={() => <Separator width={20} />}
                  ItemSeparatorComponent={() => <Separator width={10} />}
                  renderItem={({ item }) => (
                     <RestaurantCard
                        {...item}
                        navigate={(restaurantId) =>
                           navigation.navigate('Restaurant', { restaurantId })
                        }
                     />
                  )}
               />
            </View>
            <View style={styles.sortListContainer}>
               <TouchableOpacity
                  style={sortBorderStyle(activeSortItem === 'Recent')}
                  activeOpacity={0.8}
                  onPress={() => setActiveSortItem('Recent')}
               >
                  <Text style={sortTextStyle(activeSortItem === 'Recent')}>
                     Recent
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={sortBorderStyle(activeSortItem === 'Favorite')}
                  activeOpacity={0.8}
                  onPress={() => setActiveSortItem('Favorite')}
               >
                  <Text style={sortTextStyle(activeSortItem === 'Favorite')}>
                     Favorite
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={sortBorderStyle(activeSortItem === 'Rating')}
                  activeOpacity={0.8}
                  onPress={() => setActiveSortItem('Rating')}
               >
                  <Text style={sortTextStyle(activeSortItem === 'Rating')}>
                     Rating
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={sortBorderStyle(activeSortItem === 'Popular')}
                  activeOpacity={0.8}
                  onPress={() => setActiveSortItem('Popular')}
               >
                  <Text style={sortTextStyle(activeSortItem === 'Popular')}>
                     Popular
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={sortBorderStyle(activeSortItem === 'Trending')}
                  activeOpacity={0.8}
                  onPress={() => setActiveSortItem('Trending')}
               >
                  <Text style={sortTextStyle(activeSortItem === 'Trending')}>
                     Trending
                  </Text>
               </TouchableOpacity>
            </View>
            {restaurants?.map((item) => (
               <RestaurantMediumCard {...item} key={item?.id} />
            ))}
            <Separator height={Display.setHeight(5)} />
         </ScrollView>
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
      top: -1 * (2000 - 230),
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
   listContainer: {
      paddingVertical: 5,
      zIndex: -5,
   },
   horizontalListContainer: {
      marginTop: 30,
   },
   listHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginBottom: 5,
   },
   listHeaderTitle: {
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.POPPINS_MEDIUM,
      fontSize: 16,
      lineHeight: 16 * 1.4,
   },
   listHeaderSubTitle: {
      color: Colors.DEFAULT_YELLOW,
      fontFamily: Fonts.POPPINS_MEDIUM,
      fontSize: 13,
      lineHeight: 13 * 1.4,
   },
   sortListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: Colors.DEFAULT_WHITE,
      marginTop: 8,
      elevation: 1,
   },
   sortListItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: Colors.DEFAULT_YELLOW,
      height: 40,
   },
   sortListItemText: {
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      fontSize: 13,
      lineHeight: 13 * 1.4,
   },
});
