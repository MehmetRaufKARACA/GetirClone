import React,{useState} from "react";
import { ScrollView, Text } from "react-native";
import CategoryFiltering from '../../components/CategoryFiltering';
import TypeFiltering from '../../components/TypeFiltering';
import ProductContainer from '../../components/ProductContainer';
import ProductItem from '../../components/ProductItem';
import {Category} from '../../models';

function index(props) {
  const[category, setCategories] = useState<Category>(props.route.params.category);
  return (
    <ScrollView>
      <CategoryFiltering category={category}/>
      <TypeFiltering/>
      <ProductContainer/>
    </ScrollView>
  );
}

export default index;
