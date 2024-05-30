import { View, Image, TextInput, TouchableOpacity} from "react-native";

export default function Search() {
  return (
    <View>
        <View 
          style={{
              width:"354px",
              height:"52px",
              borderColor: 'black', 
              display:"flex",
              justifyContent:"space-between",
              flexDirection:"row", 
              marginTop:20}}>
                <View 
                    style={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        flexDirection:"row",
                        gap:25
                    }}>
                        <View style={{
                            width:"80%",
                            backgroundColor:"white",
                            borderRadius:15,
                            width:"75%",
                            display:"flex",
                            alignItems:"center",
                            flexDirection:"row"
                         }}>
                            <Image source={require('../assets/Vector.jpg')} style={{marginLeft:20}}/>
                            <TextInput placeholder="Search" placeholderTextColor="black" style={{
                                padding:10,
                                width:"100%"
                            }}/>
                        </View>
                        <View>
                            <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:15}}>
                                <Image source={require("../assets/bx_slider.png")}/>
                            </TouchableOpacity>
                        </View>
                </View>
              </View>
    </View>
  );
}
