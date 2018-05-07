import React from "react";
import { StyleSheet, Text, View, Image,Button,Alert,TouchableHighlight } from "react-native";
import ProductList from "./ProductList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  dec() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    const { container, label, result } = styles;
    return (
      <View style={container}>
      <Button
      onPress={()=>{Alert.alert("Button Pressed","I am button, you can press me!!")}}
      title="Learn More"
      color="#841584"
      disabled={true}
      accessibilityLabel="Learn more about this purple button"/>

      <TouchableHighlight activeOpacity={1} underlayColor={'red'} 
      onPress={()=>{}}>
        <View style={{backgroundColor:'yellow',height:100}}></View>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent:'center'
  },
  label: {
    fontSize: 32,
    color: "purple"
  },
  result: {
    fontSize: 64,
    color: "red"
  }
});
