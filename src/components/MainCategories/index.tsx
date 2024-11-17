import React, { useState } from "react";
import { Text, View } from "react-native";
import CategoryItem from "../CategoryItem";
import categoriesGetir from "@/assets/categoriesGetir";
import { Category } from "../../models";
import styles from "./styles";

function index() {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style = {styles.listContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}
export default index;
