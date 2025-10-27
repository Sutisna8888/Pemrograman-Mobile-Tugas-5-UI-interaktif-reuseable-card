import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  item: any;
  onPress: () => void;
  isFavorite: boolean;
  toggleFavorite: () => void;
};

const DestinationCard = ({ item, onPress, isFavorite, toggleFavorite }: Props) => {
  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode) return '🏳️';
    return countryCode
      .toUpperCase()
      .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt(0)));
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        source={item.imageUrl}
        style={styles.cardImage}
        imageStyle={{ borderRadius: 20 }}>
        <View style={styles.cardTop}>
          <Text style={styles.country}>
            {getFlagEmoji(item.countryCode)} {item.country}
          </Text>
          <TouchableOpacity onPress={toggleFavorite}>
            <Icon
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={isFavorite ? '#ff0000' : '#fff'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardBottom}>
          <Text style={styles.location}>{item.title}</Text>
          <View style={styles.infoRow}>
            <Icon name="star" size={14} color="#FFD700" />
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  cardImage: {
    height: 180,
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardBottom: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  country: {
    color: '#fff',
    fontSize: 12,
  },
  location: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    color: '#fff',
    marginLeft: 4,
    marginRight: 10,
  },
  price: {
    color: '#fff',
    fontWeight: '600',
  },
});
