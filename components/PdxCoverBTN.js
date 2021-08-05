import React, { useRef } from 'react'
import { Animated, Pressable } from 'react-native'

const SPEED = 100
const BTN_HEIGHT = 3
const ANGLE = 10
const PERSPECTIVE = 90

const PdxCoverBTN = React.memo(({
    onPress,
}) => {

    const animatedValue = useRef(new Animated.Value(0)).current

    const rotateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', `${ANGLE}deg`]
    })
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, BTN_HEIGHT]
    })

    const defaultAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: SPEED,
            useNativeDriver: true,
        }).start(onPress)
    }
    const pressAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: SPEED,
            useNativeDriver: true,
        }).start()
    }

    console.log('RENDER OPEN_BTN')
    return (

        <Pressable
            onPressIn={pressAnimation}
            onPressOut={defaultAnimation}
            style={{ width: 60, height: 120 }}
        >
            {/*  SHADOW */}
            <Animated.Image
                source={require('../assets/img/OPEN_C.png')}
                resizeMode={'stretch'}
                style={[
                    { width: '100%', height: '100%', position: 'absolute' },
                    {
                        transform: [
                            { rotateY: rotateY },
                            { perspective: PERSPECTIVE * 2 },
                        ]
                    }
                ]} />
            {/*  FAKE 3D  */}
            <Animated.Image
                source={require('../assets/img/OPEN_B.png')}
                resizeMode={'stretch'}
                style={[
                    { width: '100%', height: '100%', position: 'absolute' },
                    {
                        transform: [
                            { rotateY: rotateY },
                            { perspective: PERSPECTIVE * 10 },
                        ]
                    }
                ]} />
            {/*  BTN  */}
            <Animated.Image
                source={require('../assets/img/OPEN_A.png')}
                resizeMode={'stretch'}
                style={[
                    { width: '100%', height: '100%', position: 'absolute' },
                    {
                        transform: [
                            { rotateY: rotateY },
                            { translateX: translateX },
                            { perspective: PERSPECTIVE },
                        ]
                    }
                ]} />

        </Pressable>
    )
})

export default PdxCoverBTN
