import React from 'react';
import { Dimensions, View } from 'react-native';
//-------------------------------------------------
import Background from './Background'
//-------------------------------------------------
const PDX1_A = require('../assets/img/PDX1_A.png')
const PDX1_B = require('../assets/img/PDX1_B.png')
const PDX1_C = require('../assets/img/PDX1_C.png')
//-------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
const GAP = SCREEN_WIDTH * .05

/*.    ossoso/ossoso/ososso:                                
dm-    hm+---.hm+---.--hmo-.                                
dm-    hmhyhs hmhyhs   ym/                                  
dm-    hm:``` hm:```   ym/                                  
dmhddhohmdddhohm-      y*/

const PdxLeft = React.memo(({
    Display,
    CrossPad,
    GrayBTN,
    RedBTN,
    BluBTN,
    LCD_A,

}) => {
    //---------------------------------------------------------------------------
    console.log('RENDER LEFT')
    //---------------------------------------------------------------------------
    return (
        <>
            <Background
                imgA={PDX1_A}
                imgB={PDX1_B}
                imgC={PDX1_C}
            />


            <View style={[
                { width: SCREEN_WIDTH, height: '100%', },
                { justifyContent: 'flex-start', alignItems: 'flex-start' },
            ]}>
                <View style={[
                    { width: SCREEN_WIDTH - GAP * 1.1, height: '100%', },
                    { justifyContent: 'flex-start', alignItems: 'center' },
                    { paddingHorizontal: GAP },
                    // { backgroundColor: '#ffffff55' }
                ]}>

                    {/*:::::::::::::::::::::::::::::::::::::::::*/}
                    <View style={{ height: SCREEN_WIDTH * .48 }} />
                    {/*:::::::::::::::::::::::::::::::::::::::::*/}

                    {/* CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT:::: */}
                    <View style={[
                        { width: '100%', flex: 1, },
                        { justifyContent: 'flex-start', alignItems: 'center' },
                        // { backgroundColor: '#333' }
                    ]}>
                        <View style={[
                            { justifyContent: 'center', alignItems: 'center' },
                            { width: '100%' },
                        ]}>
                            {

                                /*hdd/ hdddd./ddhds+dddhh-/dy     :hdhh-:my  dm.            
                                dm- sdo +ds +dy`.+/+dy `mm+my    :my  mm+my  mm.            
                                dm- sdo +ds .shhymy+mdssd++my    :mdsomm-sh/+do`            
                                dm/-yd/-sdy-/so-:mh+mh--. /mh----/mh-:mm. /md-              
                                ossss- ossss.+sso+`:s+    :sssoss:s+  ss` .*/
                                Display
                            }
                        </View>

                        {/*:::::::::::::::::::::::::::::::*/}
                        <View style={{ height: GAP * .5 }} />
                        {/*:::::::::::::::::::::::::::::::*/}

                        <View style={[
                            { width: '95%', flex: 1 },
                            { flexDirection: 'row-reverse' },
                            // { backgroundColor: 'pink' },
                        ]}>
                            <View style={[
                                // { flex: .4 },
                                { justifyContent: 'center', alignItems: 'flex-end' },
                                // { backgroundColor: '#fa5' }
                            ]}>
                                {
                                    /*syy-`yysys. `osyy-  +ysys. +ysys.    +yyyy+` :yys+`/syys+`
                                    hm:.sdomm-.yd:hm:.yd/ym/./o/sm+./o/    sds.:my+ds./myods.:my
                                    dm- ``.mmhddy`dm. sd++mdhdh-+mdhdh:    sdy/omoody/omdods -md
                                    hm- ohsdd` yd/dm. sd+/+. ods/+. +dsyddyody++- ody+omhodo -mh
                                    `yhdd/`dd` sd/`yhdd/ /ddhd+ /ddhd+     oho    oho -dhohddh*/
                                    CrossPad
                                }
                            </View>
                            <View style={[
                                { flex: 1 },
                                { justifyContent: 'flex-start', alignItems: 'flex-start' },
                                // { backgroundColor: '#ff5' },
                                { paddingRight: GAP }
                            ]}>
                                <View style={[
                                    { width: '125%', height: GAP },
                                    { justifyContent: 'space-between', alignItems: 'flex-start' },
                                    { flexDirection: 'row' },
                                    { position: 'absolute', top: 0, left: 0 },
                                    // { backgroundColor: '#aaa' },
                                ]}>
                                    <View style={[
                                        { position: 'absolute', top: -GAP * .3, left: 0 }
                                    ]}>
                                        {
                                            /*hhh/ hhhhhh+hh/ oh+                                       
                                            dm-`odo``hm/``dmdyhdo                                       
                                            hdhddh   yd:  hd-sdh+                                       
                                            dm-`odo  ym:  dm. sdo                                       
                                            yhhhh/   sh:  hh. o*/
                                            GrayBTN
                                        }
                                    </View>
                                    <View style={[
                                        { flexDirection: 'row', width: '63%' },
                                        { justifyContent: 'space-between', alignItems: 'flex-start' },
                                        { position: 'absolute', top: 0, right: 0, }
                                    ]}>
                                        {
                                            /*hhh/ hhhhhh+hh/ oh+                                       
                                            dm-`odo``hm/``dmdyhdo                                       
                                            hdhddh   yd:  hd-sdh+                                       
                                            dm-`odo  ym:  dm. sdo                                       
                                            yhhhh/   sh:  hh. o*/
                                            RedBTN
                                        }
                                        {
                                            /*hhh/ hhhhhh+hh/ oh+                                       
                                            dm-`odo``hm/``dmdyhdo                                       
                                            hdhddh   yd:  hd-sdh+                                       
                                            dm-`odo  ym:  dm. sdo                                       
                                            yhhhh/   sh:  hh. o*/
                                            BluBTN
                                        }
                                    </View>
                                </View>

                                {/*::::::::::::::::::::::::::*/}
                                <View style={{ height: GAP * 3.2 }} />
                                {/*::::::::::::::::::::::::::*/}

                                <View style={[
                                    { width: '100%', flex: 1 },
                                    // { backgroundColor: '#fff' },
                                    { justifyContent: 'center', alignItems: 'center' },
                                ]}>
                                    {
                                        /*-    `sdhd+ ddhdd/                                        
                                        hd-    hd- +hodd. sd+                                       
                                        dm-    hm- ```dm. sd+                                       
                                        dm:...`ym/.sdodm-.yd/                                       
                                        syyyyy/`+yyy: yysy*/
                                        LCD_A
                                    }
                                </View>


                            </View>
                        </View>
                    </View>

                    {/*::::::::::::::::::::::::::::::::*/}
                    <View style={{ height: GAP * 1.5 }} />
                    {/*::::::::::::::::::::::::::::::::*/}

                </View>
            </View>
        </>
    )
})

export default PdxLeft

