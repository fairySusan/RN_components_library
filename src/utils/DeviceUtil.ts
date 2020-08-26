import { Dimensions, StatusBar, Platform, Linking } from "react-native";
import { getUniqueId } from 'react-native-device-info';
const { width: winW, height: winH } = Dimensions.get("window");
const { width: scrW, height: scrH } = Dimensions.get("screen");

let iosStatusBarHeight = 0;

export class DeviceUtil{
  /**
   * 获取屏幕宽高
   */
  public static get screen(): {width: number, height: number}{
    return {
      width: scrW,
      height: scrH
    };
  }
  /**
   * 获取窗体宽高
   */
  public static get window(): {width: number, height: number}{
    return {
      width: winW,
      height: winH
    };
  }
  /**
   * 获取状态栏高度
   */
  public static get statusBarHeight(): number | undefined{
    let height = StatusBar.currentHeight;
    return height;
  }
  /**
   * 获取设备UUID
   */
  public static get deviceUuid(): string{
    return getUniqueId();
  }
  /**
   * 判断是否是ios
   */
  public static get isIOS():boolean {
    return Platform.OS === 'ios'
  }
  /**
   * 拨打电话
   * @param phoneNumber 电话号码
   */
  public static callPhone(phoneNumber: string): void{
    Linking.openURL(`tel:${phoneNumber}`);
  }
}