import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  RefreshControl
} from "react-native";

class LayoutAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = { isRefreshing: false };
    this.refreshFeedList = this.refreshFeedList.bind(this);
  }
  refreshFeedList() {
    this.setState({ isRefreshing: true })
    setTimeout(() => this.setState({ isRefreshing: false }), 5000);
  }
  _renderRefreshControl() {
    return (
      <RefreshControl
        onRefresh={() => this.refreshFeedList()}
        refreshing={this.state.isRefreshing}
        tintColor={"#365899"}
        title={"Refresh Feed"}
        titleColor={"#365899"}
      />
    );
  }

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        refreshControl={this._renderRefreshControl()}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 125
          }}
        />
        <View
          style={{
            backgroundColor: "blue",
            height: 125
          }}
        />
        <View
          style={{
            backgroundColor: "red",
            height: 125
          }}
        />
        <View
          style={{
            backgroundColor: "blue",
            height: 125
          }}
        />
        <View
          style={{
            backgroundColor: "red",
            height: 125
          }}
        />
        <View
          style={{
            backgroundColor: "blue",
            height: 125
          }}
        />
        <View
          style={{
            backgroundColor: "red",
            height: 125
          }}
        />
      </ScrollView>
    );
  }
}

export default LayoutAssignment;
