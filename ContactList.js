import React from "react";
import ContactListItem from "./ContactListItem";
import { View, ScrollView,RefreshControl } from "react-native";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [], isRefreshing: false };
  }

  refreshContactList() {
    this.setState({ isRefreshing: true });
    fetch("https://randomuser.me/api/?results=200")
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data.results, isRefreshing: false });
      });
  }

  _renderRefreshControl() {
    return (
      <RefreshControl
        onRefresh={() => this.refreshContactList()}
        refreshing={this.state.isRefreshing}
        tintColor={"#365899"}
        title={"Refresh Feed"}
        titleColor={"#365899"}
      />
    );
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data.results });
      });
  }

  renderItems() {
    return this.state.contacts.map((c, i) => (
      <ContactListItem
        name={`${c.name.title} ${c.name.first} ${c.name.last}`}
        profileImage={c.picture.thumbnail}
        alternate={i % 2 == 0}
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

export default ContactList;
