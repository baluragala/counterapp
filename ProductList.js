import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { View, ScrollView, RefreshControl } from "react-native";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isRefreshing: false };
  }

  refreshproductList() {
    this.setState({ isRefreshing: true });
    fetch("http://192.168.0.104:4000/products")
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
    fetch("http://192.168.0.104:4000/products")
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
        image={`http://192.168.0.104:4000/images/${p.image}`}
      />
    ));
  }

  render() {
    return (
      <ScrollView refreshControl={this._renderRefreshControl()}>
        {this.renderItems()}
      </ScrollView>
    );
  }
}

export default ProductList;
