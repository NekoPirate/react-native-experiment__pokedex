import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    Dimensions,
    Animated,
    View,
    Text,
    Image,
    ScrollView,
    Pressable,
    FlatList,
    ActivityIndicator,
    Easing,
} from 'react-native';
import * as Speech from 'expo-speech'
//-------------------------------------------------
import PdxLeft from './PdxLeft'
import PdxRight from './PdxRight'
import PdxCover from './PdxCover'
import PdxCoverShadow from './PdxCoverShadow'
import PdxHeader from './PdxHeader'
import PdxBar from './PdxBar'
//-------------------------------------------------
import Display from './Display'
import LCD from './LCD'
import LCD_A from './LCD_A'
import LCD_B from './LCD_B'
import LCD_C from './LCD_C'
import LCD_D from './LCD_D'
import CrossPad from './CrossPad'
import CustomBTN from './CustomBTN'
import StringAnimation from './StringAnimation';
//-------------------------------------------------
const COLOR_RED = '#c2133a'
const COLOR_BLUE = '#11709e'
const COLOR_GRAY = '#111111'
//-------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const GAP = SCREEN_WIDTH * .05
//-------------------------------------------------
const SPEED_toggleCover = 750 //5000
const SPEED_toggleDisplay = 600
const SPEED_toggleLcd = 700
const SPEED_LCD_A_press = 250
const DURATION = 5000
//-------------------------------------------------
//:::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::
const Pokedex = React.memo(({ DATA }) => {


    const [isOpen, setIsOpen] = useState(false)
    const scrollRef = useRef()

    const toggleCoverAnimationValue = useRef(new Animated.Value(0)).current
    const toggleDisplayAnimationValue = useRef(new Animated.Value(0)).current
    const toggleLcdAnimationValue = useRef(new Animated.Value(0)).current
    const LCD_A_pressPrevAnimationValue = useRef(new Animated.Value(0)).current
    const LCD_A_pressNextAnimationValue = useRef(new Animated.Value(0)).current
    const LCD_A_stringAnimationValue = useRef(new Animated.Value(0.5)).current
    const [textSizeValue, setTextSizeValue] = useState(10)

    // const lcdLeftContentAnimationValue = useRef(new Animated.Value(0)).current

    const [pokemonID, setPokemonID] = useState(25)


    //  ANIMATION + SCROLL
    //::::::::::::::::::::::::::::::
    const ON_animation = () => {

        Animated.sequence([
            Animated.timing(toggleCoverAnimationValue, {
                toValue: 1,
                duration: SPEED_toggleCover,
                useNativeDriver: true,
            }),

            Animated.parallel([
                Animated.timing(toggleDisplayAnimationValue, {
                    toValue: 1,
                    duration: SPEED_toggleDisplay,
                    useNativeDriver: true,
                }),
                Animated.timing(toggleLcdAnimationValue, {
                    toValue: 1,
                    duration: SPEED_toggleLcd,
                    useNativeDriver: true,
                })
            ])

        ]).start()
    }
    const OFF_animation = () => {

        scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })

        Animated.sequence([
            Animated.parallel([
                Animated.timing(toggleDisplayAnimationValue, {
                    toValue: 0,
                    duration: SPEED_toggleDisplay,
                    useNativeDriver: true,
                }),
                Animated.timing(toggleLcdAnimationValue, {
                    toValue: 0,
                    duration: SPEED_toggleLcd,
                    useNativeDriver: true,
                })
            ]),

            Animated.timing(toggleCoverAnimationValue, {
                toValue: 0,
                duration: SPEED_toggleCover,
                useNativeDriver: true,
            }),

        ]).start()
    }
    const LCD_A_animationPressPrev = () => {

        Animated.sequence([
            Animated.timing(LCD_A_pressPrevAnimationValue, {
                toValue: 1,
                duration: SPEED_LCD_A_press,
                useNativeDriver: true,
            }),
            Animated.timing(LCD_A_pressPrevAnimationValue, {
                toValue: 0,
                duration: SPEED_LCD_A_press,
                useNativeDriver: true,
            })

        ]).start()
    }
    const LCD_A_animationPressNext = () => {
        Animated.sequence([
            Animated.timing(LCD_A_pressNextAnimationValue, {
                toValue: 1,
                duration: SPEED_LCD_A_press,
                useNativeDriver: true,
            }),
            Animated.timing(LCD_A_pressNextAnimationValue, {
                toValue: 0,
                duration: SPEED_LCD_A_press,
                useNativeDriver: true,
            })

        ]).start()
    }

    //::::::::::::::::::::::::::::::
    useEffect(() => {

        !isOpen
            ? OFF_animation()
            : ON_animation()
    }, [isOpen])
    //::::::::::::::::::::::::::::::





    //  CALLBACK
    //::::::::::::::::::::::::::::::
    const handle_toggleCover = useCallback(() => {
        setIsOpen(isOpen => !isOpen)
        stopSpeech()
    }, [])
    const handle_goToPrevPokemon = useCallback(() => {
        LCD_A_animationPressPrev()
        setPokemonID(pokemonID => pokemonID - 1)
        stopSpeech()
        console.log('::::::::::::::::::::SCROLL-PREV')
    }, [])
    const handle_goToNextPokemon = useCallback(() => {
        LCD_A_animationPressNext()
        setPokemonID(pokemonID => pokemonID + 1)
        stopSpeech()
        console.log('::::::::::::::::::::SCROLL-NEXT')
    }, [])
    const handle_left = useCallback(() => {
        console.log('::::::::::::::::::::left')
    }, [])
    const handle_right = useCallback(() => {
        console.log('::::::::::::::::::::right')
    }, [])
    const handle_top = useCallback(() => {
        console.log('::::::::::::::::::::top')
    }, [])
    const handle_bottom = useCallback(() => {
        console.log('::::::::::::::::::::bottom')
    }, [])
    //::::::::::::::::::::::::::::::
    const handle_zoomOutTextLCD_B = useCallback(() => {
        setTextSizeValue(textSizeValue => textSizeValue - 2)
        console.log('::::::::::::::::::::top')
    }, [])
    const handle_zoomInTextLCD_B = useCallback(() => {
        setTextSizeValue(textSizeValue => textSizeValue + 2)
        console.log('::::::::::::::::::::bottom')
    }, [])


    // const handle_speak = () => {
    //     Speech.speak('provaprovaprova', {
    //         language: 'he',
    //         pitch: '1',
    //         rate: '0.9',
    //     })
    //     console.log('speeeeech')
    //     // };
    // }
    const [isSpeaking, setIsSpeaking] = useState(false)
    const handle_speak = useCallback(() => {
        const thingToSay = `${DATA && DATA[pokemonID - 1].name}: ${DATA && DATA[pokemonID - 1].description}`
        setIsSpeaking(isSpeaking => !isSpeaking)
        if (!isSpeaking) {
            Speech.speak(thingToSay, {
                language: 'ja-JP',
                onStart: startSpeech,
                onDone: stopSpeech,
                pitch: 1.5,
                rate: 0.9,
            })
        } else {

            stopSpeech()
        }
        console.log('speeeeech')
    });
    const stopSpeech = () => {
        setIsSpeaking(false)
        Speech.stop()
    }

    const startSpeech = () => setIsSpeaking(true)

    //::::::::::::::::::::::::::::::
    // useEffect(() => {

    //     isSpeaking
    //         ? OFF_animation()
    //         : ON_animation()
    // }, [isSpeaking])
    //::::::::::::::::::::::::::::::
    //:::::::::::::::::::::::::::
    // console.log(DATA)
    console.log('RENDER POKEDEX')
    //:::::::::::::::::::::::::::
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            scrollEnabled={isOpen ? true : false}
            ref={scrollRef}
        >
            {
                /*.    ossoso/ossoso/ososso:                                
                dm-    hm+---.hm+---.--hmo-.                                
                dm-    hmhyhs hmhyhs   ym/                                  
                dm-    hm:``` hm:```   ym/                                  
                dmhddhohmdddhohm-      y*/
            }
            <PdxLeft

                Display={<Display
                    size={SCREEN_WIDTH - (GAP * 2.2)}
                    animatedValue={toggleDisplayAnimationValue}
                    currentPokemon={DATA && DATA[pokemonID - 1]}
                />}

                LCD_A={<LCD_A
                    currentPokemon={DATA && DATA[pokemonID - 1]}
                    toggleLcdAnimationValue={toggleLcdAnimationValue}
                    LCD_A_pressPrevAnimationValue={LCD_A_pressPrevAnimationValue}
                    LCD_A_pressNextAnimationValue={LCD_A_pressNextAnimationValue}
                    LCD_A_stringAnimationValue={LCD_A_stringAnimationValue}
                />}

                CrossPad={<CrossPad
                    size={SCREEN_WIDTH * .37}
                    onPressLeft={handle_left}
                    onPressRight={handle_right}
                    onPressTop={(pokemonID > 1) && handle_goToPrevPokemon}
                    onPressBottom={(pokemonID < 151) && handle_goToNextPokemon} />}

                GrayBTN={<CustomBTN
                    width={GAP * 2.5}
                    height={GAP * 2.5}
                    borderRadius={GAP * 2.5}
                    color={COLOR_GRAY}
                    onPress={handle_speak} />}

                RedBTN={<CustomBTN
                    width={GAP * 2.5}
                    height={GAP * 1.3}
                    borderRadius={10}
                    color={COLOR_RED}
                    onPress={() => null} />}

                BluBTN={<CustomBTN
                    width={GAP * 2.5}
                    height={GAP * 1.3}
                    borderRadius={10}
                    color={COLOR_BLUE}
                    onPress={() => null} />}
            />

            <PdxRight
                LCD_B={<LCD_B
                    currentPokemon={DATA && DATA[pokemonID - 1]}
                    toggleLcdAnimationValue={toggleLcdAnimationValue}
                    textSizeValue={textSizeValue} />}

                LCD_C={<LCD_C
                    currentPokemon={DATA && DATA[pokemonID - 1]}
                    toggleLcdAnimationValue={toggleLcdAnimationValue} />}

                LCD_D={<LCD_D
                    currentPokemon={DATA && DATA[pokemonID - 1]}
                    toggleLcdAnimationValue={toggleLcdAnimationValue} />}

                WhiteBTN_A={<CustomBTN
                    onPress={handle_zoomOutTextLCD_B}
                    width={(SCREEN_WIDTH - GAP * 2) * .177}
                    height={(SCREEN_WIDTH - GAP * 2) * .177}
                    borderRadius={5}
                    color={'#ccc'}
                    shadow={false} >

                    <View style={[
                        { width: '50%', height: '15%' },
                        { backgroundColor: '#111' },
                    ]} />
                </CustomBTN>}

                WhiteBTN_B={<CustomBTN
                    onPress={handle_zoomInTextLCD_B}
                    width={(SCREEN_WIDTH - GAP * 2) * .177}
                    height={(SCREEN_WIDTH - GAP * 2) * .177}
                    borderRadius={5}
                    color={'#ccc'}
                    shadow={false} >

                    <View style={[
                        { width: '50%', height: '15%' },
                        { backgroundColor: '#111' },
                    ]} />
                    <View style={[
                        { position: 'absolute' },
                        { width: '15%', height: '50%' },
                        { backgroundColor: '#111' },
                    ]} />
                </CustomBTN>}

                onPressOpen={handle_toggleCover} />

            <PdxCoverShadow animationValue={toggleCoverAnimationValue} />

            <PdxHeader isOpen={isOpen} isSpeaking={isSpeaking} />

            <PdxBar />

            <View pointerEvents={isOpen ? 'none' : 'auto'}
                style={[
                    { width: SCREEN_WIDTH, height: '100%' },
                    { justifyContent: 'flex-start', alignItems: 'center' },
                    { position: 'absolute' },
                ]}>

                <PdxCover
                    animationValue={toggleCoverAnimationValue}
                    onPress={handle_toggleCover}
                />
            </View>

        </ScrollView>
    );
})

export default Pokedex
