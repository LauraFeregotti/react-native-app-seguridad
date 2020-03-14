import React, { useRef, useState } from "react";
import { CATEGORIES } from "../Data/Dummy-data";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Pagination } from "react-native-snap-carousel";
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text
} from "react-native";
import { Colors } from "react-native-paper";

const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = props => {
  /*const[state, setState] = useState ({entries, activeSlide});
  const _renderItem = ({item, index}) =>{
    return <MySlideComponent data={item} />
}

const pagination = () => {
 
    return (
        <Pagination
          dotsLength={state.entries.length}
          activeDotIndex={state.activeSlide}
          containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}

return (
        <View>
            <Carousel
              data={CATEGORIES}
              renderItem={_renderItem}
              onSnapToItem={(index) => setState({ activeSlide: index }) }
            />
            { pagination }
        </View>
    );*/

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
        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() => {
            props.navigation.navigate({
              routeName: "TallerDetalle",
              params: {
                tallerId: item.id
              }
            });
          }}
        >
          <View>
            <Text style={styles.tipo} numberOfLines={2}>
              {item.tipo}
            </Text>
          </View>
          <View>
            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 40}
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
    marginBottom: 25,
  },
  item: {
    flex: 1,
    justifyContent: "flex-end"
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 20
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  },
  titleContainer: {
    position: "absolute",
    flex: 1,
    margin: 20,
    padding: 5
  },
  title: {
    color: "white",
    fontFamily: "open-sans-extrabold",
    fontSize: 25
  },
  tipo: {
    color: "white",
    fontFamily: "open-sans-extrabold",
    fontSize: 11
  }
});
