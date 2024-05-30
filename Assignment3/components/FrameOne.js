import { View, Text, Image} from "react-native";

export default function FrameOne() {
  return ( 
        <View 
          style={{
              width:"354px",
              height:"52px",
              // borderWidth: 1, 
              borderColor: 'black', 
              marginTop:50,
              marginHorizontal:20,
              display:"flex",
              justifyContent:"space-between",
              flexDirection:"row"}}>
            <View>
              <View>
                <Text style={{fontSize:22.5, fontWeight:"bold"}}>Hello , Devs</Text>
                <Text style={{fontSize:10}}>14 tasks today</Text>
              </View>
            </View>
            <View>
              <View style={{
                width:50,
                height:52,
                backgroundColor:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:50
              }}>
                <Image source={require('../assets/download.png')} />
              </View>
            </View>
        </View>   
  );
}
