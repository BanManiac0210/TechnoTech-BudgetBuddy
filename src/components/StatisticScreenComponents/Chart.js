import React from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useState } from 'react';
import Tooltip from './Tooltip';

const ChartComponent = () => {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 });

  const hideTooltip = () => {
    if (tooltipPos.visible) {
      setTooltipPos({ ...tooltipPos, visible: false });
    }
  };

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={hideTooltip} activeOpacity={1}>
      <View className="w-full">
        <LineChart
          className="flex-1"
          data={{
            labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
            datasets: [
              {
                data: [20, 45, 28, 50],
                strokeWidth: 4 // Increase the line weight
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 0) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
              fill: "white", // inside color of the dots
              onPress: (e) => {
                const { x, y, value } = e.nativeEvent;
                setTooltipPos({ x, y, visible: true, value });
              }
            },
            gridColor: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`, // gray grid color
            fillShadowGradient: `#ffa726`, // start color for the gradient fill
            fillShadowGradientTo: `rgba(255, 255, 255, 0)`, // end color for the gradient fill (transparent white)
            fillShadowGradientFromOpacity: 0.3, // starting opacity for the gradient fill
            fillShadowGradientToOpacity: 0 // ending opacity for the gradient fill
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
          onDataPointClick={({ value, x, y }) => {
            setTooltipPos({ x, y, visible: true, value });
          }}
        />
        {tooltipPos.visible && (
          <Tooltip x={tooltipPos.x} y={tooltipPos.y} value={tooltipPos.value} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChartComponent;
