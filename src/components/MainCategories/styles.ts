import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listContainer:{
        flex: 1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap: 'wrap', // öğelerin tek bir satıra sığmaması durumunda yeni satıra geçer ve dizer.
    },
})

export default styles;