import React, { useState } from "react";
import { ScrollView, Text, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.044,
          marginRight: 12,
        },
        item == active
          ? { backgroundColor: "#5C3EBC" }
          : { borderColor: "#F0EFF7", borderWidth: 2 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849F7", fontWeight: "600" },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};
function Index() {
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        height: height * 0.072,
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
}

export default Index;
