import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",   
    },

    containerBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#d50000',
    },  

    box: {
        width:100,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'stretch',
        borderWidth: 3,
        backgroundColor: '  #ff5131',
        margin: 10,
    },  

    text: {
        marginBottom: 10,
    }
})