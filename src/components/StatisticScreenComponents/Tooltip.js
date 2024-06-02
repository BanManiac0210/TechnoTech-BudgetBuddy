// Tooltip.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tooltip = ({ x, y, value }) => {
  return (
    <View style={[styles.tooltip, { left: x - 50, top: y - 40 }]}>
      <Text style={styles.tooltipText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltip: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 5,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Tooltip;
