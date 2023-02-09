import React from "react";
import { View, Text, StyleSheet,SafeAreaView } from "react-native/types";

export default function Homepage(){
    return(
    <SafeAreaView>
        <Text style={styles.heading}>My trial</Text>
    </SafeAreaView >
    )

}
 const styles=StyleSheet.create({
    heading:{
        color:"red",
        fontSize:".3rem"
    }
 })


