import { SafeAreaView, ScrollView} from "react-native";
import FrameOne  from "./components/FrameOne";
import Search  from "./components/Search";
import Categories  from "./components/Categories";
import OngoingTask  from "./components/OngoingTask";

export default function App() {
  return (
    <ScrollView>
        <SafeAreaView
          style={{
            backgroundColor:"#F7F0E8", 
            height:"100%",
            padding:20
          }}> 
              <FrameOne/>
              <Search/>
              <Categories/>
              <OngoingTask/>
        </SafeAreaView>
    </ScrollView>

   
  );
}
