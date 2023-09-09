import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
export class Background extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#101014", "#6534C9", "#8247C5", "#FFE8D2"]}
        style={{ flex: 1 }}
      >
        {this.props.children}
      </LinearGradient>
    );
  }
}

export default Background;
