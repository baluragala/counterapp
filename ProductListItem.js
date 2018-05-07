import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductListItem = ({ id, image, title, price, rating, reviews }) => (
  <View style={[styles.container]}>
    <Image
      source={{ uri: image }}
      style={styles.image}
      resizeMode={"contain"}
    />
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 15,
          marginRight: 40
        }}
      >
        <Text style={{ color: "grey", marginRight: 10 }}>{title}</Text>
        <Ionicons
          name="md-heart"
          size={32}
          color="green"
          style={{ width: 60 }}
        />
      </View>
      <View style={{}}>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey"
  },
  image: {
    margin: 10,
    width: 120,
    height: 120
  }
});

export default ProductListItem;
