import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    Animated,
    Easing,
    View,
    Text,
    Image,
} from 'react-native';
//-------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
//-------------------------------------------------
const DURATION = 5000

const StringAnimation = React.memo(({
    stringOfText,
    size,
}) => {

    const [containerWidth, setContainerWidth] = useState(0)
    const endpointValue = useRef(new Animated.Value(0)).current
    const translateX = useRef(new Animated.Value(0)).current



    const myAnimation = () => {
        resetParameters()
        Animated.loop(
            Animated.timing(translateX, {

                toValue: endpointValue,
                easing: Easing.linear,
                duration: DURATION,
                useNativeDriver: true,
            })
        ).start()
    }
    const resetParameters = () => {
        translateX.setValue(0)
    }
    const handleLayout_container = (e) => {
        setContainerWidth(Math.round(e.nativeEvent.layout.width))
        // console.log(':::handleLAYOUT_CONTAINER')
    }
    const handleLayout_string = (e) => {
        endpointValue.setValue(-(e.nativeEvent.layout.width + containerWidth))
        // console.log(':::handleLAYOUT_STRING')
    }
    useEffect(myAnimation, [stringOfText])

    //---------------------------------------------------------------------------
    console.log('RENDER STRING')
    //---------------------------------------------------------------------------
    return (
        <View
            onLayout={(e) => handleLayout_container(e)}
            style={[
                { position: 'absolute', width: '100%', height: '100%' },
                { justifyContent: 'center', alignItems: 'flex-start' },
                // { backgroundColor: '#ff0' }
            ]} >
            <Animated.View
                onLayout={(e) => handleLayout_string(e)}
                style={[
                    { position: 'absolute', left: containerWidth, paddingTop: 3 },
                    { justifyContent: 'center', alignItems: 'center' },
                    { transform: [{ translateX: translateX }] },
                    // { backgroundColor: '#fff' }

                ]}>
                <Text style={[
                    { width: '100%', textAlign: 'left' },
                    { fontSize: size, fontFamily: 'lcd' },
                    { color: '#111' },
                ]}>{stringOfText}</Text>
            </Animated.View>
        </View >
    )
})
export default StringAnimation
