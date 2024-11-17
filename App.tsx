import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "@/src/navigators/RootNavigator";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import * as Linking from 'expo-linking';
import CartScreen from "./src/screens/CartScreen";


const prefix= Linking.createURL('/')
const RootLayout = () => {
  const linking={
    prefixes:[prefix],
    config:{
      screens:{
        Search:{
          screens:{
            CartScreen:{
              path:"cartScreen/:message",
              parse:{
                message:(message:string)=>`message--${message}`
              }
            }
          }
        }
      }
    }
  }
  return (
    <Provider  store={store}>

    <NavigationContainer linking={linking} >
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
