import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const LineGraph = ({ data }) => {
  return (
    <View>
      <LineChart
        data={{
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
            },
          ],
        }}
        width={350}
        height={200}
        yAxisLabel="RM"
        chartConfig={{
          backgroundColor: "#6534C9",
          backgroundGradientFrom: "#6534C9",
          backgroundGradientTo: "#6534C9",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 20,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  graphTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default LineGraph;
