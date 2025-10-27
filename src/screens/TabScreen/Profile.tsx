import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FakeStatusBar from '../../components/FakeStatusBar';

export default function ProfileScreen() {
  return (
    <>
      <FakeStatusBar />
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/komodo.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Sutisna</Text>
        <Text style={styles.email}>sutisna@gmail.com</Text>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={[styles.buttonText, { color: "#fff" }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f7faff",
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#DDD",
    marginVertical: 20,
  },
  button: {
    width: "80%",
    backgroundColor: "#FF8C00",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  logoutButton: {
    backgroundColor: "#E74C3C",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
