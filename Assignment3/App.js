import { View, Text, SafeAreaView, Image} from "react-native";
import FrameOne  from "./components/FrameOne";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor:"#F7F0E8", 
        height:"100%" 
      }}> 
       <FrameOne/>
    </SafeAreaView>
   
  );
}
