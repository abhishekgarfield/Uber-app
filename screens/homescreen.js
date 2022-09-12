import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import navslice, { add } from "../features/navslice";

const Homescreen=()=>{
    const data=useSelector((state)=>{return state.naviga.items})
    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        });
    },[])
    return(
        <SafeAreaView>
            <Text>{data}</Text>
        </SafeAreaView>
    );
}

export default Homescreen;