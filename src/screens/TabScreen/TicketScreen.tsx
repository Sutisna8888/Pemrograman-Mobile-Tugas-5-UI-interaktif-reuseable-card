import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const TicketScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Aircraft");
  const [selectedDate, setSelectedDate] = useState("M");
  
  const categories = ["Hotel", "Aircraft", "Villa", "Bioskop"];
  const dates = [
    { day: "S", date: 22 },
    { day: "M", date: 23 },
    { day: "T", date: 24 },
    { day: "W", date: 25 },
    { day: "T", date: 26 },
    { day: "F", date: 27 },
    { day: "S", date: 28 },
  ];

  const tickets = [
    {
      id: 1,
      from: "NL",
      to: "IDN",
      departTime: "5:30pm",
      departDate: "Mon, 23 Jun",
      arriveTime: "3:30am",
      arriveDate: "Tue, 24 Jun",
      price: "$1,700",
    },
    {
      id: 2,
      from: "NL",
      to: "IDN",
      departTime: "8:00am",
      departDate: "Mon, 23 Jun",
      arriveTime: "5:00pm",
      arriveDate: "Mon, 23 Jun",
      price: "$1,400",
    },
  ];

  
  const getCategoryIcon = (category: string, size = 18, color = "#000") => {
    const key = (category || "").toLowerCase();
    switch (key) {
      case "hotel":
        return <Ionicons name="bed-outline" size={size} color={color} />;
      case "aircraft":
      case "flight":
      case "plane":
        return <Ionicons name="airplane-outline" size={size} color={color} />;
      case "villa":
        return (
          <MaterialCommunityIcons name="home-variant" size={size} color={color} />
        );
      case "bioskop":
      case "cinema":
      case "movie":
        return <Ionicons name="film-outline" size={size} color={color} />;
      default:
        return <Ionicons name="help-circle-outline" size={size} color={color} />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tickets</Text>

      {/* Current location */}
      <Text style={styles.locationLabel}>Current location</Text>
      <Text style={styles.location}>Indonesia</Text>

      {/* Categories */}
      <View style={styles.categories}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.categoryActive,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            {getCategoryIcon(item, 18, selectedCategory === item ? "#fff" : "#444")}
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item && styles.categoryTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Dates */}
      <View style={styles.datesContainer}>
        <Text style={styles.monthText}>June, 2025</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((item) => (
            <TouchableOpacity
              key={item.date}
              style={[
                styles.dateItem,
                selectedDate === item.day && styles.dateActive,
              ]}
              onPress={() => setSelectedDate(item.day)}
            >
              <Text
                style={[
                  styles.dateDay,
                  selectedDate === item.day && styles.dateDayActive,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dateNumber,
                  selectedDate === item.day && styles.dateNumberActive,
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Ticket List */}
      <Text style={styles.ticketFound}>2 Tickets Found</Text>
      {tickets.map((ticket) => (
        <View key={ticket.id} style={styles.ticketCard}>
          <View style={styles.airlineTag}>
            <Text style={styles.airlineText}>AIRLINES</Text>
          </View>

          <View style={styles.ticketContent}>
            <View>
              <Text style={styles.code}>{ticket.from}</Text>
              <Text style={styles.time}>{ticket.departTime}</Text>
              <Text style={styles.date}>{ticket.departDate}</Text>
            </View>

            <Text style={styles.planeIcon}>✈️</Text>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.code}>{ticket.to}</Text>
              <Text style={styles.time}>{ticket.arriveTime}</Text>
              <Text style={styles.date}>{ticket.arriveDate}</Text>
            </View>
          </View>

          <Text style={styles.price}>{ticket.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6dbee4ff",
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#070707ff",
    marginBottom: 20,
  },
  locationLabel: {
    color: "#0c0b0bff",
    fontSize: 14,
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 15,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  categoryButton: {
    backgroundColor: "#e2b00aff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryIcon: {
    marginRight: 8,
  },
  categoryActive: {
    backgroundColor: "#F85F35",
  },
  categoryText: {
    color: "#0f0202ff",
    fontWeight: "600",
  },
  categoryTextActive: {
    color: "#fff",
  },
  datesContainer: {
    marginBottom: 15,
  },
  monthText: {
    fontWeight: "bold",
    color: "#0a0a0aff",
    fontSize: 18,
    marginBottom: 10,
  },
  dateItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    width: 50,
  },
  dateActive: {
    backgroundColor: "#F85F35",
  },
  dateDay: {
    fontSize: 14,
    color: "#0a0a0aff",
  },
  dateDayActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  dateNumberActive: {
    color: "#fff",
  },
  ticketFound: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0a0a0aff",
    marginBottom: 15,
  },
  ticketCard: {
    backgroundColor: "#ffffffff",
    borderRadius: 25,
    marginBottom: 15,
    padding: 13,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOpacity: 5.5,
    shadowRadius: 18,
    elevation: 12,
  },
  airlineTag: {
    position: "absolute",
    left: -1,
    top: 0,
    bottom: 0,
    width: 35,
    backgroundColor: "#a34c23ff",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  airlineText: {
    transform: [{ rotate: "-90deg" }],
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "bold",
    fontSize: 12,
  },
  ticketContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 10,
    alignItems: "center",
  },
  code: {
    fontSize: 24,
    fontWeight: "bold",
  },
  time: {
    color: "#1a1818ff",
  },
  date: {
    color: "#110e0eff",
    fontSize: 13,
  },
  planeIcon: {
    fontSize: 30,
  },
  price: {
    alignSelf: "flex-end",
    fontWeight: "bold",
    color: "#222",
    marginTop: 13,
    fontSize: 16,
  },
});
