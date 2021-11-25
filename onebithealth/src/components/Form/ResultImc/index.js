import React from "react";
import {View,Text, ProgressViewIOSComponent} from "react-native";

export default function ResultImc(){
    return(
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.messageReusltImc}</Text>
        </View>
    );
}