import { View } from "react-native";
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
        <View>
            {data.map((item)=>
                <>
                <View>
                        <Icon
                        type="ionicon"
                        name={item.icon}
                        />
                </View>
                </>
            )}
        </View>
    );
}
export default Navfav;