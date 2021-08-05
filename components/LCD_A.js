import React, { useState, useRef, useEffect } from 'react';
import {
    Animated,
    Easing,
    View,
    Text,
    Image,
    ActivityIndicator,

} from 'react-native';
//-------------------------------------------------
import LCD from './LCD'
//-------------------------------------------------
const DURATION_translation = 5000
const DURATION_opacity = 500


const LCD_A = React.memo(({
    currentPokemon = null,
    toggleLcdAnimationValue,
    LCD_A_pressPrevAnimationValue,
    LCD_A_pressNextAnimationValue,

}) => {
    const [containerWidth, setContainerWidth] = useState(0)
    const [stringWidth, setStringWidth] = useState(0)

    const animatedOpacityValue = useRef(new Animated.Value(0)).current
    const animatedValue = useRef(new Animated.Value(0.5)).current
    const animatedValueB = useRef(new Animated.Value(1)).current

    const opacityBack = LCD_A_pressPrevAnimationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 0.2]
    })
    const opacityNext = LCD_A_pressNextAnimationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 0.2]
    })

    const translateX = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [-stringWidth, 0, containerWidth]
    })


    const firstLoopAnimation = () => {
        Animated.timing(animatedOpacityValue, {
            toValue: 1,
            easing: Easing.linear,
            duration: DURATION_opacity,
            useNativeDriver: true,
        }).start(() => myAnimation())

    }

    // const handle = () => {
    //     animatedValue.setValue(1)

    // }
    const myAnimation = () => {

        Animated.timing(animatedValue, {
            delay: 1000,
            toValue: 0,
            easing: Easing.linear,
            duration: DURATION_translation,
            useNativeDriver: true,
        }).start(() => myAnimation2())

    }
    const myAnimation2 = () => {
        animatedValue.setValue(1)
        Animated.loop(

            Animated.timing(animatedValue, {

                toValue: 0,
                easing: Easing.linear,
                duration: DURATION_translation,
                useNativeDriver: true,
            })
        ).start()
    }


    // const resetParameters = () => {
    //     animatedValue.setValue(0.5)
    //     myAnimation()

    // }


    const handleLayout_container = (e) => {
        setContainerWidth(Math.round(e.nativeEvent.layout.width))
        // console.log(':::handleLAYOUT_CONTAINER')
    }
    const handleLayout_string = (e) => {
        setStringWidth(Math.round(e.nativeEvent.layout.width))
        // endpointValue.setValue(-(e.nativeEvent.layout.width + containerWidth))
        // console.log(':::handleLAYOUT_STRING')
    }
    useEffect(() => {
        animatedValue.setValue(0.5)
        animatedOpacityValue.setValue(0)

        firstLoopAnimation()
    }, [currentPokemon])
    //:::::::::::::::::::::::::::
    console.log('RENDER LCD_A')
    //:::::::::::::::::::::::::::
    return (
        <LCD animatedValue={toggleLcdAnimationValue}>
            {
                (currentPokemon)
                    ?
                    <View style={{ width: '100%', flex: 1 }}>
                        {/* :::::::::::::::::::::::::::::::::::::::::::::: */}
                        <Animated.View style={[ //prev
                            { flex: 3 },
                            { justifyContent: 'center', alignItems: 'center' },
                            { backgroundColor: '#11111133', opacity: opacityBack },
                        ]}>
                            <Image source={require('../assets/img/triangle.png')} resizeMode={'stretch'}
                                style={[
                                    { width: 30, height: 10 },
                                    { position: 'absolute' },
                                ]} />

                        </Animated.View>
                        {/* :::::::::::::::::::::::::::::::::::::::::::::: */}
                        <View
                            onLayout={(e) => handleLayout_container(e)}
                            style={[ //current
                                { flex: 4 },
                                { justifyContent: 'center', alignItems: 'flex-start' },
                                { backgroundColor: '#11111166' },
                                // { backgroundColor: '#f10' }

                            ]}>
                            <Animated.View
                                onLayout={(e) => handleLayout_string(e)}
                                style={[
                                    { position: 'absolute', left: 0, paddingTop: 3 },
                                    { justifyContent: 'center', alignItems: 'center' },
                                    { transform: [{ translateX: translateX }, { scale: animatedOpacityValue }], opacity: animatedOpacityValue },
                                    // { backgroundColor: '#fff' }

                                ]}>
                                <Text style={[
                                    { width: '100%', textAlign: 'left' },
                                    { fontSize: 30, fontFamily: 'lcd' },
                                    { color: '#111' },
                                ]}>{currentPokemon.name}</Text>
                            </Animated.View>
                        </View>
                        {/* :::::::::::::::::::::::::::::::::::::::::::::: */}
                        <Animated.View style={[ //next
                            { flex: 3 },
                            { justifyContent: 'center', alignItems: 'center' },
                            { backgroundColor: '#11111133', opacity: opacityNext },
                        ]}>
                            <Image source={require('../assets/img/triangle.png')} resizeMode={'stretch'}
                                style={[
                                    { width: 30, height: 10 },
                                    { position: 'absolute' },
                                    { transform: [{ rotate: '180deg' }] },
                                ]} />
                        </Animated.View>
                        {/* :::::::::::::::::::::::::::::::::::::::::::::: */}
                    </View>

                    : <ActivityIndicator size={40} color={'#222'} />
            }
        </LCD >
    )
})

export default LCD_A
