/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,  View, Text, Image} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PLaceList from './src/components/PlaceList/PlaceList';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
 state = {
   places: []
 }

 

 placeAddedHandler = placeName => {
  this.setState(prevState => {
    return {
      places: prevState.places.concat(placeName)
    };
  });
};

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Enter Your Favorite Place</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PLaceList places={this.state.places}/>
        <View>
      </View>
      </View>
  
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    fontSize: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  // container2: {
  //   flex: 2,
  //   alignItems: 'center',
  // },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  headline: {
    fontSize: 30,
  }

});
