import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    formContext:{
        flex:1,
        backgroundColor:"#ffffff",
        alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
    },
    form:{
        width:"100%",
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        height:40,
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        margin:12,
        paddingLeft:10,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#FFFFFF",
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    errorMessage:{
        fontSize:12,
        color:"#FF0000",
        fontWeight:"bold",
        paddingLeft:20,
    }
});

export default styles