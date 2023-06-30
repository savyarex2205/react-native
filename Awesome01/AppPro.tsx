import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
    Button
} from "react-native";


var chngColor_1 = false
var chngColor_2 = true

function changeColor_View1(){
    console.log("View1 Button Clicked");
    if (chngColor_1){
        chngColor_1 = false;
    }
    else{
        chngColor_1 = true;
    }
}

function changeColor_View2(){
    console.log("View2 Button Clicked");
    if (chngColor_2){
        chngColor_2 = false;
    }
    else{
        chngColor_2 = true;
    }
}

function AppPro(){
    const isDarkMode = useColorScheme() === "light"
    
    return(
        <SafeAreaView style={{flexDirection: "row"}}>
            <View style={style.first}>
                <Text style={chngColor_1? {color:"#9999ff"} : {color: "#99ff99"}}>First Header</Text>
                <Text style={{color:"red"}}>This line contains different Color Style</Text>
                <Button title="Change Color" color="blue" onPress={changeColor_View1}></Button>
            </View>

            <View style={style.second}>
                <Text style={isDarkMode ? {color: "#2bbf2e"} : {color: "#000000"} }>Second Header</Text>
                <Text style={chngColor_2 ? {color: "#e699ff"} : {color: "#ffff80"}}>This is  content for Second Header</Text>
                <Button title="Change Color" color="orange" onPress={changeColor_View2}></Button>
                
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    first: {
        flex: 2,
        color: "#FF0000",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#99ffcc"
    },

    second: {
        flex: 2,
        color: "#FFFF00",
        alignItems: "flex-end",
        flexDirection: "column",
        backgroundColor: "#ff9980"
    }
})



export default AppPro;