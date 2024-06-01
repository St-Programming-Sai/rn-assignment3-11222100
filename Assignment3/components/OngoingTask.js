import { View, Text, SafeAreaView, FlatList } from "react-native";

const tasks = [
    { key: 1, name: 'Web Development' }, { key: 2, name: 'Mobile App Development' },
    { key: 3, name: 'Push-ups' }, { key: 4, name: 'Writing a Blog Post' },
    { key: 5, name: 'Graphic Design' }, { key: 6, name: 'Learning a New Language' },
    { key: 7, name: 'Cooking Dinner' }, { key: 8, name: 'Reading a Book' },
    { key: 9, name: 'Gardening' }, { key: 10, name: 'Yoga Practice' },
    { key: 11, name: 'Data Analysis' }, { key: 12, name: 'Running Errands' },
    { key: 13, name: 'Social Media Management' }, { key: 14, name: 'Budget Planning' },
    { key: 15, name: 'Online Course Completion' },
  ];
  
  


export default function OngoingTask() {
  return (
    <View>
        <Text style={{fontSize:19, fontWeight:"bold", marginVertical:20}}>Ongoing Tasks</Text>
        {tasks.map((task) => {
             return (
                <View key={task.key}  style={{
                        padding:30,
                        borderWidth:3,
                        marginBottom:20,
                        borderRadius:20,
                        borderColor:"#E8D1BA"
                    }}>
                    <Text style={{fontWeight:"bold"}}>{task.name}</Text>
                </View>
            );
        })}
    </View>
  );
}
