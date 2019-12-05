import React, { useRef } from "react";
import { CATEGORIES } from "../Data/Dummy-data";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = props => {
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const _renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.imageUrl }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 100}
        data={CATEGORIES}
        renderItem={_renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:10,
  },
  item: {
    width: screenWidth - 100,
    height: screenWidth - 100
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  },
  bgImage: {
    height: 200,
    width: 200
  },
  title:{
    margin: 10,
  },
});
