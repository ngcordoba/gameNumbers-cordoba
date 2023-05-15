import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { Dimensions } from "react-native";

const { width, heigh } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },

    imageContainer: {
        width: "50%",
        height: "80%",
    },


});

export default styles;