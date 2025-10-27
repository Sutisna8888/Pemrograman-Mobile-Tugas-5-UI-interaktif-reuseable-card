import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FakeStatusBar from '../../components/FakeStatusBar';

const { width } = Dimensions.get("window");

const DetailBali = () => {
  const route = useRoute();
  const { title, country, imageUrl, rating, price, description } = route.params as any;

  return (
    <>
      <FakeStatusBar />
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} resizeMode="cover" />
          <LinearGradient
            colors={["rgba(0,0,0,0.4)", "transparent"]}
            style={styles.gradient}
          />
          <View style={styles.overlay}>
            <Text style={styles.country}>{country}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.rating}>⭐ {rating.toFixed(1)} / 5.0</Text>
          <Text style={styles.price}>💰 $ {price.toLocaleString()} / pax</Text>

          <Text style={styles.sectionTitle}>Deskripsi</Text>
          <Text style={styles.desc}>{description}</Text>

          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <LinearGradient
              colors={["#00BFFF", "#1E90FF", "#4169E1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Book Now ✈️</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFB" },
  imageContainer: { position: "relative" },
  image: {
    width: width,
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  overlay: {
    position: "absolute",
    bottom: 30,
    left: 20,
  },
  country: {
    color: "#FFD700",
    fontWeight: "600",
    fontSize: 16,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  rating: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    color: "#1E90FF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#333",
    fontWeight: "700",
    marginVertical: 10,
  },
  desc: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    textAlign: "justify",
    marginBottom: 30,
  },
  button: {
    alignSelf: "center",
    width: "90%",
    borderRadius: 30,
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonGradient: {
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default DetailBali;
