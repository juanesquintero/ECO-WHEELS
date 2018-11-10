import React, { Component } from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/projects")
      .then(res => {
        const { data } = res;
        this.setState({
          isLoading: false,
          dataSource: data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.name}: {item.description}
            </Text>
          )}
          keyExtractor={({ _id }) => _id}
        />
      </View>
    );
  }
}
