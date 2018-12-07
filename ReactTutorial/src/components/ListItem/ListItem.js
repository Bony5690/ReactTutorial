import  React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const listItem = (props) => (
   <View style={styles.listItem}>
       <Text style={{fontSize: 20}}>{props.placeName}</Text>
   </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        margin: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
});

export default listItem;