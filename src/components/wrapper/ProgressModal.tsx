import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    progress: number
}

class ProgressModal extends PureComponent<Props>{


    public render(){
        let { progress } = this.props;
        let percentPrgress = Number(progress*100).toFixed(0);
        return (
            <View style={styles.container}>
                <View style={styles.progressBox}>
                    <Text style={styles.title}>更新资源下载中</Text>
                    <View style={styles.sliderBox}>
                        <View style={[styles.slider, { width: `${percentPrgress}%` }]}></View>
                    </View>
                    <Text style={styles.info}>{percentPrgress}%</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        alignItems: "center",
        justifyContent: "center"
    },
    progressBox: {
        width: "80%",
        height: 200,
        backgroundColor: "white",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 16
    },
    info: {
        fontSize: 14,
        color: "#999"
    },
    sliderBox: {
        width: "80%",
        height: 8,
        backgroundColor: "#e6e7e8",
        marginVertical: 20,
        borderRadius: 8,
        position: "relative"
    },
    slider: {
        height: 8,
        backgroundColor: "#0081FF",
        borderRadius: 8,
        position: "absolute",
        left: 0,
        top: 0
    }
})

export default ProgressModal;