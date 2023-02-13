import React, { useState, useEffect, useRef } from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    Animated,
} from "react-native";
import CarouselCards from "./CarouselCards";

const { width, heigth } = Dimensions.get("window");
let flatList;



const infiniteScroll = async (dataList) => {
    const numberOfData = dataList.length;
    var scrollValue = 0,
        scrolled = 0;
    setInterval(async () => {
        scrolled++;
        if (scrolled < numberOfData) scrollValue = scrollValue + width
        else {
            scrollValue = 0;
            scrolled = 0;
        }
        if (flatList.scrollToOffset != null && dataList.length) {

            // await flatList.scrollToOffset({ animated: true, offset: scrollValue });
        }

    }, 3000);
}





const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);

    useEffect(() => {
        setDataList(data);
    }, []);

    useEffect(() => {
        infiniteScroll(dataList);
    }, [dataList])

    if (dataList && dataList.length) {
        return (
            <SafeAreaView>
                <FlatList
                    ref={(flatList1) => {
                        flatList = flatList1
                    }}
                    data={data}
                    keyExtractor={(item, index) => "key" + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselCards item={item} />;
                    }}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } },
                    ],
                        { useNativeDriver: false }
                    )}
                />

                <SafeAreaView style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp",
                        });
                        return (
                            <Animated.View
                                key={i}
                                style={{
                                    opacity,
                                    height: 10,
                                    width: 10,
                                    backgroundColor: "#595959",
                                    margin: 8,
                                    borderRadius: 5,
                                }}
                            />
                        );
                    })}
                </SafeAreaView>
            </SafeAreaView>
        );
    }

    return null;
};

const styles = StyleSheet.create({
    dotView: { flexDirection: "row", justifyContent: "center" },
});

export default Carousel;