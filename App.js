/*
..........................................yMMd...............oMMM-..................................................................................................................
.......................:::-...............yMMd...............-///.........::-.................::-.................-::-.........::-....................-::-........-:::-......-:::-..
hMMd...dMMm...mMMs..omMMMMMNh:..-MMMydNMs.yMMd..sMMN+........+MMM...mMMmdMMMMd:.........dMMmdMMMMd:..oMMMsmMM:./dMMMMMMd+...+dMMMMNMMM+..sMMNsmMM-./dMMmmMMd/../hNMNNMMN:.-yNMMNNMMo
-NMM/.oMNMMo.+MMm..yMMm:..oMMM:.-MMMhsos/.yMMd/mMMy-.........+MMM...mMMd/:/NMMh.........dMMd:-:hMMN..oMMMysos-+MMM/../NMMo.+MMMo-.-MMM+..sMMNysos.oMMm:::oMMM-.MMMh/---+-.hMMN/:--//
.oMMm-NM+yMN-mMM/..NMMy....MMMs.-MMM/.....yMMMMMMm-..........+MMM...mMMs...hMMh.........dMMh.../MMM:.oMMM.....hMMm....dMMd.yMMN....MMM+..sMMm.....dMMNmmmmmmm:.+mMMMMMNh:.:dMMMMMNd+
..dMMmMd.-NMmMMy...yMMm-..+MMM/.-MMM/.....yMMm-sMMN+.........+MMM...mMMs...hMMh.........dMMh..:dMMm..oMMM.....+MMM/..:NMMo./MMMy//oMMM+..sMMm.....sMMN/....:o..o:-:/+NMMh.+/--:+dMMN
..:MMMM:..+MMMN-....smMMNNMMh/..-MMM/.....yMMd../NMMy........+MMM...mMMs...hMMh.........dMMNMMMMNy-..oMMM......+dMMNNMMm+.../hNMMNhMMM+..sMMm......+dMMMNNMMN.-NMMNNNMNy-.hMMNNNMMd/
...----....---........-://:......---.......---....---.........---...---.....--..........dMMh.::-......---.........://:....../o/::/yMMN-...---.........-::::.....-::::-......-:::-...
........................................................................................hNNy................................+mNMMMNds-..............................................
*/

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import DisplayBig from './components/DisplayBig'
import DisplayGreen from './components/DisplayGreen'
import Led from './components/Led'
import FlatBTN from './components/FlatBTN'
import RoundBTN from './components/RoundBTN'
import CrossPad from './components/CrossPad'


import { withAnchorPoint } from 'react-native-anchor-point'

const COLOR_RED = '#c2133a'
const COLOR_RED_LIGHT = '#f6a9b2'
const COLOR_GOLD = '#f5c912'
const COLOR_GOLD_LIGHT = '#fcf0be'
const COLOR_GREEN = '#4fa95f'
const COLOR_GREEN_LIGHT = '#c1e2c7'
const COLOR_BLUE = '#11709e'
const COLOR_BLUE_LIGHT = '#d2d2d2'
const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const GAP = SCREEN_WIDTH * .05

export default function App() {

  // const rotateValue = useRef(new Animated.Value(0)).current
  // const translateValueY = useRef(new Animated.Value(0)).current
  // const translateValueX = useRef(new Animated.Value(0)).current
  // const scaleValue = useRef(new Animated.Value(1)).current
  // const getTransform = () => {
  //   let transform = {
  //     transform: [
  //       {
  //         rotateY: rotateValue.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: ['0deg', '140deg']
  //         })
  //       },
  //       {
  //         translateX: translateValueX
  //       },
  //       {
  //         translateY: translateValueY
  //       },
  //       {
  //         scale: scaleValue
  //       },
  //     ],
  //   };
  //   return withAnchorPoint(transform, { x: 1, y: 1 }, { width: SCREEN_WIDTH + 40, height: SCREEN_HEIGHT });
  //   // return transform
  // };

  // {/* <Animated.View style={[styles.blockBlue, this.getTransform()]} /> */ }

  // const pressAnimation = () => {
  //   Animated.timing(translateValueY, {
  //     toValue: 5,
  //     duration: 200,
  //     useNativeDriver: true

  //   }).start()
  // }
  // const openAnimation = () => {

  //   Animated.parallel([
  //     Animated.timing(scaleValue, {
  //       toValue: 1.06,
  //       duration: 500,
  //       useNativeDriver: true,

  //     }),
  //     Animated.timing(translateValueX, {
  //       toValue: SCREEN_WIDTH * 1.1,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }),
  //     // Animated.timing(rotateValue, {
  //     //   toValue: 1,
  //     //   duration: 500,
  //     //   useNativeDriver: true,
  //     // })

  //   ]).start()
  // }
  // const closeAnimation = () => {

  //   Animated.sequence([
  //     Animated.parallel([
  //       Animated.timing(translateValueX, {
  //         toValue: 0,
  //         duration: 500,
  //         useNativeDriver: true,

  //       }),
  //       Animated.timing(scaleValue, {
  //         toValue: 1,
  //         duration: 500,
  //         useNativeDriver: true,
  //       }),
  //       // Animated.timing(rotateValue, {
  //       //   toValue: 0,
  //       //   duration: 500,
  //       //   useNativeDriver: true,
  //       // })
  //     ]),
  //     Animated.timing(translateValueY, {
  //       toValue: 0,
  //       duration: 200,
  //       useNativeDriver: true
  //     })

  //   ]).start()
  // }

  // const handle_press = () => {
  //   pressAnimation()
  // }
  // const handle_OpenBtn = () => {

  //   openAnimation()

  //   setTimeout(() => { closeAnimation() }, 4000)
  // }

  return (
    <View style={[
      { flex: 1 },
      { alignItems: 'center', justifyContent: 'flex-start' },
      { backgroundColor: COLOR_OUTLINE },

    ]}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}

      >

        {/* LEFT------------------------------------------- */}
        <View style={[
          { width: SCREEN_WIDTH, flex: 1, },
          { alignItems: 'flex-start', justifyContent: 'flex-start' },
        ]}>
          {/* BACKGROUND IMAGE------------------------------------------- */}
          <View style={[
            { width: SCREEN_WIDTH, height: '100%', position: 'absolute' },
            { justifyContent: 'flex-start', alignItems: 'center' },
            // { backgroundColor: '#ff0' },
          ]}>

            <Image source={require('./assets/img/PDX.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />
          </View>



          {/* BIG BLUE LED------------------------------------------- */}
          <View style={[
            { position: 'absolute', top: GAP, left: GAP },
          ]}>

            <Led
              size={65}
              colorA={COLOR_BLUE}
              colorB={COLOR_BLUE_LIGHT}
              border={true}
              pulse={true}
              shiny={true}
              speed={500}
              pos={'absolute'}
              top={GAP}
              left={GAP} />

          </View>


          {/* SMALL LEDS------------------------------------------- */}
          <View style={[
            { width: 80, height: 30 },
            { position: 'absolute', top: GAP * 1.5, left: (SCREEN_WIDTH / 2) - 40 },
            { flexDirection: 'row', justifyContent: 'space-between' },
          ]}>

            <Led size={21} colorA={COLOR_RED} colorB={COLOR_RED_LIGHT} speed={100} />
            <Led size={21} colorA={COLOR_GOLD} colorB={COLOR_GOLD_LIGHT} speed={100} />
            <Led size={21} colorA={COLOR_GREEN} colorB={COLOR_GREEN_LIGHT} speed={100} />

          </View>

          {/* CONTENT:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
          <View style={[
            { width: SCREEN_WIDTH * .9, flex: 1, },
            // { position: 'absolute', top: SCREEN_WIDTH * .43, bottom: GAP * 1.3, left: SCREEN_WIDTH * .02 },
            { marginTop: SCREEN_WIDTH * .43, marginBottom: GAP * 1.3, marginLeft: SCREEN_WIDTH * .03 },
            // { backgroundColor: '#ff0' },
          ]}>
            <View style={{ height: GAP }} />


            {/* TOP-------------------------------------------------------- */}
            <View style={[
              { width: '100%' },
              // { backgroundColor: '#555' },
              { justifyContent: 'center', alignItems: 'center' },
            ]}>
              {/* DISPLAY BIG-------------------------------------------------- */}
              <DisplayBig >
                <Image source={require('./assets/img/pika_big.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode={'contain'} />
              </DisplayBig>
            </View>


            <View style={{ height: GAP }} />
            {/* BOTTOM----------------------------------------------------- */}
            <View style={[
              { width: '100%', flex: 1 },
              { flexDirection: 'row' },
              // { backgroundColor: '#555' }


            ]}>

              <View style={[
                { width: '50%', flex: 1 },
                { justifyContent: 'flex-start', alignItems: 'center' },
                // { backgroundColor: '#f0f' }
              ]}>

                {/* PULSANTI_PIATTI-------------------------------------------- */}
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: GAP }}>
                  <FlatBTN color={COLOR_RED} isActive={true} onPress={() => alert('RED BUTTON')} />
                  <FlatBTN color={COLOR_BLUE} isActive={true} onPress={() => alert('BLUE BUTTON')} />
                </View>

                {/* DISPLAY_VERDE---------------------------------------------- */}
                <DisplayGreen>
                  <Image source={require('./assets/img/pika_small.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode={'cover'} />
                </DisplayGreen>

              </View>
              <View style={[
                { width: '50%', flex: 1 },
                { justifyContent: 'center', alignItems: 'center' },
                // { backgroundColor: '#0ff' }
              ]}>

                {/* <RoundBTN size={40} onPress={() => alert('ROUND')} /> */}

                {/* CROCE------------------------------------------------------ */}
                <CrossPad
                  onPressLeft={() => null}
                  onPressTop={() => null}
                  onPressRight={() => null}
                  onPressBottom={() => null} />

              </View>
            </View>

          </View>
        </View>

        {/* RIGHT------------------------------------------- */}
        <View style={[
          { width: SCREEN_WIDTH, flex: 1 },
          { alignItems: 'center', justifyContent: 'flex-start' },
        ]}>
          <View style={{ height: GAP }} />

          {/* BACKGROUND IMAGE------------------------------------------- */}
          <View style={[
            { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, position: 'absolute' },
            { justifyContent: 'center', alignItems: 'center' },
            // { backgroundColor: '#ff0' },
          ]}>

            <Image source={require('./assets/img/PDX2.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />
          </View>
        </View>

      </ScrollView>



      {/* COVER----------------------------------------------------- */}
      {/* <View style={[
        { width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
        {
          justifyContent: 'flex-start', alignItems: 'center'
        },
        // { backgroundColor: '#ff0' },
        { position: 'absolute' }
      ]}>

        <Image source={require('./assets/img/PDX-cover.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />
      </View> */}


      <StatusBar style="auto" hidden={true} />
    </View >
  );
}
