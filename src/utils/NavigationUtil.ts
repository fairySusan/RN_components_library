import React from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

/**
 *  统一跳转的参数
 */
export type WhereParams = {
  toWhere: "toPage" | "toUrl" | "toMini", // 是要跳转到哪里 app内部页面 ｜ 外部链接 ｜ 小程序
  url?: string, // 跳转地址
  params?: object, // 参数
  openType?: "navigate" | "push" // 打开方式 跳转到 ｜ 再打开一个
}

/**
 * 路由跳转工具类
 * @description 使用方法，把工具类中navigationRef放到NavigationContainer的ref上即可
 */
export class NavigationUtil {

  public static route: {key: string, name: string, params: {[key:string]:any}};

  public static navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

  public static get navigatior(): NavigationContainerRef | null {
    return this.navigationRef.current;
  }

  /**
   * 跳转到指定路由（如果页面栈中存在，则返回那一个页面）
   * @param routeName 路由名称
   * @param params 传递参数
   */
  public static navigate(routeName:any, params?: { [key: string]: any }) {
    NavigationUtil.navigatior?.navigate(routeName, params);
  }
  /**
   * 将某页面压入栈顶（可以打开多个同一个页面）
   * @param routeName 路由名称
   * @param params 参数
   */
  public static push(routeName: any, params?: { [key: string]: any }) {
    NavigationUtil.navigatior?.dispatch(StackActions.push(routeName, params));
  }
  /**
   * 返回上一个页面
   */
  public static goBack() {
    NavigationUtil.navigatior?.goBack();
  }
  /**
   * 返回最底层层页面
   */
  public static popToTop() {
    NavigationUtil.navigatior?.dispatch(StackActions.popToTop());
  }
  /**
   * 将当前页面替换为指定页面
   * @param name 路由名称
   * @param params 参数
   */
  public static replace(routeName: string, params: object | undefined) {
    NavigationUtil.navigatior?.dispatch(StackActions.replace(routeName, params))
  }
  /**
   * 统一跳转方法，方便判断点击模块应该作出的跳转动作
   * @param config 跳转参数
   */
  public static toWhere(config: WhereParams){
    // 打开app内部页面
    if(config.toWhere === "toPage"){
      let openType = config.openType || "navigate";
      NavigationUtil[openType](config.url, config.params);
      return;
    }
    // 打开外部链接
    if(config.toWhere === "toUrl"){
      let openType = config.openType || "navigate";
      NavigationUtil[openType]("webview", { url: config.url, ...config.params });
      return;
    }
    // 打开小程序
    if(config.toWhere === "toMini"){
      let params: any = config.params;
      //待我集成sdk再来定义
    }
  }
  /**
   * 跳转到文件下载
   */
  public static toDownload(params: {url: string, attaName: string, extName: string, size?: string}){
    NavigationUtil.navigate("fileDownloader", params);
  }
  /**
   * 设置route
   */
  public static setRoute(route: {key: string, name: string, params: {[key:string]:any}}) {
    NavigationUtil.route = route;
  }

  /**
   * 获取params
   */
  public static get params(): {[key: string]: any} {
    return NavigationUtil.route.params;
  }
}