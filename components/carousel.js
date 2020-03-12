import React, { useRef, useState } from "react";
import { CATEGORIES } from "../Data/Dummy-data";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Pagination } from 'react-native-snap-carousel';
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
        <Text style={styles.tipo} numberOfLines={2}>
            {item.tipo}
          </Text>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>

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
    marginBottom: 5,
  },
  item: {
    flex: 1,
    width: 630.364,
    height: 354.579,
    padding:10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 20,
    
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    borderRadius: 20,
  },
  bgImage: {
    width: 630.364,
    height: 354.579,
    borderRadius: 20,
  },
  titleContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "column-reverse",
    alignContent: "flex-end",
    justifyContent: "flex-end"
  },
  title: {
    padding: 10,
    color: "white",
    fontFamily: "open-sans-extrabold",
    width: "100%",
    fontSize: 25,
    flexDirection: "column-reverse",
    alignContent: "flex-end",
    justifyContent: "flex-end"
  },
  tipo:{
    padding: 10,
    color: "white",
    fontFamily: "open-sans-extrabold",
    width: "100%",
    fontSize: 11,
    alignContent: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column-reverse",
  }
});