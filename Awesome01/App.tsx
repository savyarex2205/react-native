import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Alert
} from "react-native";

function actionTrial(){
  return Alert.alert("This is my first button Alert in Android")
}

function App(){
  return (
    <SafeAreaView>
      <View>
        <Text>This is first Line</Text>
        <Text>This is Second Line</Text>
        <Text>This is Third Line</Text>
        <Text>This is fourth Line</Text>
      </View>
      <View>
        <Button title="Click Me" color="purple" onPress={actionTrial} />
      </View>
    </SafeAreaView>
  )
}


export default App;