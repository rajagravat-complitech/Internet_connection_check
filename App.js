import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, CheckBox } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const App=()=>
{
  let a

  useEffect(()=>{
    const unsubscribe = NetInfo.addEventListener((internet) => {
      console.log("IS INTERNET REACHABLE", internet.isInternetReachable);
      a=internet.isInternetReachable
    });
    return()=>
    {
      unsubscribe(); 
    }    
  })
 
  return(
    <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
        <Button
          title="check connection"
          onPress={()=>{
            if(a)
            {
              alert("net is coonected")
            }
            else{
              alert("disconnected")
            }
          }}>
        </Button>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
