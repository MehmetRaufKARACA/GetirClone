import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https:///cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16, marginLeft: 1 }}>
            Ev
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 13,
              color: "#6E7480",
              marginLeft: 4,
              marginRight: 1,
            }}
          >
            Örnekköy Mahallesi Köyiçi Sk.No:92{" "}
          </Text>
          <Entypo name="chevron-small-right" size={25} color="#5D3EBD" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 13, fontWeight: "bold", color: "#5D3EBD" }}>
            TVS
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5D3EBD" }}>
            13<Text style={{ fontSize: 15 }}>dk</Text>
          </Text>
        </View>
      </View>

      <View></View>
    </View>
  );
}

export default index;
