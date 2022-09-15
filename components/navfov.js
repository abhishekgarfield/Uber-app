import { View,Text, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const data=[{
    id:123,
    icon:"home",
    location:"Home",
    destination:"Sujanpur tira"
},
{
    id:456,
    icon:"briefcase",
    location:"Work",
    destination:"Chandigarh"
}]
const Navfav=()=>{
    return(
        <ScrollView contentContainerStyle={{alignItems:"center"}}>
            {data.map((item)=>
                <>
                <TouchableOpacity style={{flexDirection:"row",alignItems:"center",padding:17}}>
                        <Icon
                        type="ionicon"
                        name={item.icon}
                        size={25}
                        color={"white"}
                        style={{backgroundColor:"lightgrey",padding:10,borderRadius:50}}
                        />
                        <View style={{flexDirection:"column",flexGrow:1,marginLeft:10}}>
                        <Text style={{fontWeight:"bold",fontSize:19}}>{item.location}</Text>
                        <Text style={{fontWeight:"600",fontSize:17,color:"lightgrey"}}>{item.destination}</Text>
                        </View>
                </TouchableOpacity>
                </>
            )}
        </ScrollView>
    );
}
export default Navfav;