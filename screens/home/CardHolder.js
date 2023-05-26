//import liraries
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import SuperCard from '../../components/cards/SuperCard';
import HomeHeader from '../../components/HomeHeader';
import { COLORS, ROUTES } from '../../constants';
import connections from '../../dummyData/connections/data';

// create a component
const CardHolder = () => {
    const userInfo = useSelector(state => state.AuthReducer.userEmail);
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <HomeHeader title={route.name}></HomeHeader>
            <View style={styles.headerWithSearch}>
                <View style={styles.searchBarHolder}>
                    <Searchbar
                    placeholder="Search"
                    onChangeText={(txt) => console.log(txt)}
                    value={searchQuery}
                    />
                </View>
            </View>            
            {/* <Text>{userInfo}</Text>   */}
            <ScrollView style={styles.cardList}>
                {connections.map(connection => <SuperCard connection={connection} key={connection.id}></SuperCard>)}
                {/* <SuperCard></SuperCard>
                <SuperCard></SuperCard>
                <SuperCard></SuperCard>
                <SuperCard></SuperCard> */}

            </ScrollView>
            <Button title="Card Profile" onPress={() => {navigation.navigate(ROUTES.CARDPROFILE, {name: "Check", email: "Check"})}}/>          
        </View>
        </TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:StatusBar.currentHeight,
        backgroundColor: COLORS.offwhiteBackground,
    },
    searchBarHolder: {
        marginTop: 10,
        paddingHorizontal: 20
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    headerWithSearch: {
        height: 80,
        backgroundColor: COLORS.primary

    },
    cardList: {
        flex: 1,
        margin: 10,
        marginBottom: 50
    }
});

//make this component available to the app
export default CardHolder;
