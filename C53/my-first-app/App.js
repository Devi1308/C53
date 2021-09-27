import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export  class CustomButton extends Component {
  render (){
    return(
      <Button color= "yellow" title= "Press Me"></Button>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <view  style={{marginTop: 150}}>
      <Text style={{marginTop:80 ,marginLeft:120,color:"blue",fontSize: 25}}>My first App</Text>
      <CustomButton/>        
        </view>
    );
  }
}