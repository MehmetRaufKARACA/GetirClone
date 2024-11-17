import React, { useState } from "react";
import { View, Text, FlatList, Dimensions, Image } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import styles from "./styles";

const { width } = Dimensions.get("window");
function index() {
  const [banners, setBanners] = useState([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
  ]);

  return (
    <FlatList
      data={banners}
      renderItem={(item) => (
        <Image source={{ uri: item.item }} style={styles.image} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false} // Kaydırma sırasında görülen yatay kaydırma çubuğunu gizler.
      snapToInterval={width} // Kaydırma sırsaında belirli bir aralığa "yapışmasını " sağlar. width, her öğenin genişliğini temsil eder.
      snapToAlignment={"center"} // Snap işlemini hizalanma noktasını belirtir. center deyince öğe ekranın ortasında hizalanır.
      decelerationRate={"fast"} // kaydırma hızının yavaşlatılma oranı. fast kaydırmanın dah hızlı durmasını sağlar.
    />
  );
}

export default index;
