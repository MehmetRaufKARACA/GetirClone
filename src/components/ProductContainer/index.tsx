import React from "react";
import { View, Text } from "react-native";
import ProductItem from "../../components/ProductItem";
import productsGetir from "@/assets/productsGetir";

function Index() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={{color:'grey',fontWeight:'bold',padding:14}}>Çubuk</Text>
      <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,backgroundColor:'white',paddingVertical:10,alignItems:'center'}}>
        {productsGetir.slice(2).map((item)=> (
            <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default Index;
