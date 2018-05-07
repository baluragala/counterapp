import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import {
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator
} from "react-native";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isRefreshing: false };
  }

  refreshproductList() {
    this.setState({ isRefreshing: true });
    fetch("http://172.16.105.228:4000/products")
      .then(response => response.json())
      .then(products => {
        this.setState({ products, isRefreshing: false });
      });
  }

  _renderRefreshControl() {
    return (
      <RefreshControl
        onRefresh={() => this.refreshproductList()}
        refreshing={this.state.isRefreshing}
        tintColor={"#365899"}
        title={"Refresh Products"}
        titleColor={"#365899"}
      />
    );
  }

  componentDidMount() {
    fetch("http://172.16.105.228:4000/products")
      .then(response => response.json())
      .then(products => {
        this.setState({ products, isRefreshing: false });
      });
  }

  renderItems() {
    return this.state.products.map(p => (
      <ProductListItem
        key={p.id}
        title={p.title}
        image={`http://172.16.105.228:4000/images/${p.image}`}
      />
    ));
  }

  render() {
    return (
      <ScrollView refreshControl={this._renderRefreshControl()}>
        {this.state.products.length > 0 ? (
          this.renderItems()
        ) : (
          <ActivityIndicator size="large" color="blue" />
        )}
      </ScrollView>
    );
  }
}

export default ProductList;
