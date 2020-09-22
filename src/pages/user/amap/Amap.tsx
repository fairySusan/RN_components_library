import React, {useState, useEffect} from 'react';
import { Text,View, StyleSheet, Alert } from 'react-native';
import { MapView, MapType} from 'react-native-amap3d';
import { CommonSty } from '@/assets/styles';
import { defaultConfig } from '@/config/config';
import { PermissionsAndroid } from "react-native";
import { init, Geolocation } from "react-native-amap-geolocation";



function AmapScreen() {
  const _coordinates = [
    {
      latitude: 39.806901,
      longitude: 116.397972,
    },
    {
      latitude: 39.806901,
      longitude: 116.297972,
    },
    {
      latitude: 39.906901,
      longitude: 116.397972,
    },
    {
      latitude: 39.706901,
      longitude: 116.397972,
    },
  ];
  const [time, setTime] = useState(new Date());
  const [coord, setCoord] = useState({latitude: 39.91095,longitude: 116.37296});
  useEffect(() => {
    permission();
  },[])

  const permission = async () => {
    console.log('cccc')
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);
    await init({
      ios: defaultConfig.amapIosKey,
      android: defaultConfig.amapAddroidKey
    });
    Geolocation.getCurrentPosition((coords) => {
      console.log('coords', coords);
    },(error) => {console.log('error', error.code)});
  }

  const _onDragEvent = (data:{latitude: number, longitude: number}) => {
    Alert.alert(`${data.latitude}, ${data.longitude}`);
  }
  const _onMarkerPress = () => Alert.alert('onPress');
  const _onInfoWindowPress = () => Alert.alert('onInfoWindowPress');
  return (
    <View style={CommonSty.full}>
      {/* <Picker>
        <Picker.Item label="标准" value={MapType.Standard} />
        <Picker.Item label="卫星" value={MapType.Satellite} />
        <Picker.Item label="导航" value={MapType.Navi} />
        <Picker.Item label="夜间" value={MapType.Night} />
        <Picker.Item label="公交" value={MapType.Bus} />
      </Picker> */}
      <View style={{flex: 1}}>
        <MapView
         style={StyleSheet.absoluteFill}
         locationEnabled={true}
         onLocation={(nativeEvent) => setCoord({latitude: nativeEvent.latitude,longitude: nativeEvent.longitude})}
         center={coord}
         mapType={MapType.Night}
        >
          <MapView.Marker
            active
            draggable
            title="一个可拖拽的标记"
            description={time.toLocaleTimeString()}
            onDragEnd={_onDragEvent}
            onInfoWindowPress={_onInfoWindowPress}
            coordinate={_coordinates[0]}
          />
        </MapView>
      </View>
    </View>
  )
}

export default AmapScreen;