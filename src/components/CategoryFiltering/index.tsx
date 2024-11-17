import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

import categoriesGetir from "@/assets/categoriesGetir";

const CategoryBox = ({ item,active }: { item: Category, active:Category }) => {
  return (
    <View style={[{paddingHorizontal:9,flexDirection:'row',alignItems:'center'},item.name==active.name && {borderBottomColor:'#FFD00C',borderBottomWidth:2.5}]}>
      <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>{item.name}</Text>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
function Index({category}:{category:Category}) {
  const [categories, setCategories] =
    React.useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category}/>
      ))}
    </ScrollView>
  );
}

export default Index;
