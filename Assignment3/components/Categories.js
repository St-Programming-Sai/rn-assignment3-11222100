import { View, Text, Image, FlatList } from "react-native";


const categories = [
    { key: '1', name: 'Exercise' },
    { key: '2', name: 'Study' },
    { key: '3', name: 'Code' },
    { key: '4', name: 'Cook' },
    { key: '5', name: 'Read' },
    { key: '6', name: 'Travel' },
    { key: '7', name: 'Relax' },
    { key: '8', name: 'Meditate' },
  ];

  const getImage = (itemName) => {
    switch (itemName.toLowerCase()){
        case "exercise":
            return require('../assets/exercise.png');
        case "study":
            return require('../assets/study.png');
        case "code":
            return require('../assets/code.png');
        case "cook":
            return require('../assets/cook.png');
        case "read":
            return require('../assets/read.png');
        case "travel":
            return require('../assets/travel.png');
        case "relax":
            return require('../assets/relax.png');
        case "meditate":
            return require('../assets/meditate.png');
        default:
            return require('../assets/study.png');
    }
  }

  const renderCategory = ({ item }) => {
    return (
        <View style={{
            backgroundColor:"white",
            marginRight:20,
            width:190,
            borderRadius:10,
            padding:10
        }}>
            <Text style={{fontSize:16, fontWeight:"bold"}}>{item.name}</Text>
            <Text style={{fontSize:12, fontWeight:"light", marginBottom:10}}>12 Tasks</Text>
            <View style={{display:"flex", justifyContent:"center", alignContent:"center", marginLeft:30}}>
                <Image source={getImage(item.name)} style={{width:"80%", height:"80%"}}/>
            </View>
        </View>
    );
};

export default function Categories() {
  return (
    <View>
        <Text style={{fontSize:19, fontWeight:"bold", marginTop:10}}>Categories</Text>
        <View style={{
            height:196,
            marginTop:5
        }}>
            <FlatList 
                bounces={true}
                horizontal={true} 
                data={categories} 
                renderItem={renderCategory}
                keyExtractor={(item) => item.key}
                showsHorizontalScrollIndicator={false}/>
        </View>
    </View>
  );
}
