import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FakeStatusBar = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateClock();
    const timer = setInterval(updateClock, 60000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.statusBar}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.icons}>
        <Icon name="cellular-outline" size={18} color="#000" style={styles.icon} />
        <Icon name="wifi-outline" size={18} color="#000" style={styles.icon} />
        <Icon name="battery-full-outline" size={20} color="#000" />
      </View>
    </View>
  );
};

export default FakeStatusBar;

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 5,
    backgroundColor: '#F9F7F2', 
  },
  time: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
  },
});
