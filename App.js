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
           <ProductList/>
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
