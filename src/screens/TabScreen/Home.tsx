import React, { useState } from 'react';
import { View,Text,StyleSheet,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { destinations } from '../../data/destinations';
import DestinationCard from '../../components/DestinationCard';
import FakeStatusBar from '../../components/FakeStatusBar'; 

const Home = () => {
  const navigation = useNavigation<any>();
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FakeStatusBar />
      <StatusBar style="dark" backgroundColor="#F9F7F2" hidden={true} />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hi}>Hi,</Text>
            <Text style={styles.name}>Sutisna</Text>
          </View>
          <View style={styles.weather}>
            <Icon name="sunny-outline" size={20} color="#FF8C00" />
            <Text style={styles.weatherText}>25°C</Text>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Plan Your Summer!</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Icon name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Icon name="search" size={18} color="#555" />
            <TextInput
              placeholder="Search destination..."
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="options-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Destination Cards */}
        <View style={styles.destinationContainer}>
          {destinations.map(item => (
            <DestinationCard
              key={item.id}
              item={item}
              isFavorite={favorites.includes(item.id)}
              toggleFavorite={() => toggleFavorite(item.id)}
              onPress={() => navigation.navigate('DetailBali', item)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(250, 248, 245, 1)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fafaf9ff',
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hi: {
    color: '#181616',
    fontSize: 16,
  },
  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  banner: {
    marginTop: 25,
    backgroundColor: '#FF784E',
    borderRadius: 20,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    width: '70%',
  },
  bannerButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 10,
    borderRadius: 15,
  },
  searchContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#F0EEDF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 45,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#0C2233',
    marginLeft: 10,
    padding: 10,
    borderRadius: 12,
  },
  sectionHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  viewAll: {
    color: '#999',
  },
  destinationContainer: {
    marginTop: 15,
  },
});
