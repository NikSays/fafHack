import { StatusBar } from 'expo-status-bar';
import react,{useState} from 'react';
import { StyleSheet, Text, View, Button, Platform, TextInput} from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
export default function App() {
  const[startDate, setDate] = useState(new Date());
  const[startText, setText] = useState('Select Date');
  const[endDate, setDate2] = useState(new Date());
  const[endText, setText2] = useState('Select Date');
  const[project, setProject] = useState('Daniel');
  const[duration_H, setDuration_H] = useState('00');
  const[notes, setNotes] = useState('Note');


  const onchange = (selectDate) =>{
    const currentDate = selectDate || startDate;
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate  = new Date(currentDate);
    let fdate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear(); 
    setText(fdate);

  }

  const onchange2 = (selectDate) =>{
    const currentDate2 = selectDate || endDate;
    // setShow(Platform.OS === 'ios');
    setDate2(currentDate2);

    let tempDate  = new Date(currentDate2);
    let fdate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear(); 
    setText2(fdate);

  }
  return (
    <View style={styles.container}>
       <View style={{...styles.hor, marginTop:"10%"}}>
       <View style={styles.in}>
          <Text>Name of the task: </Text>
          <TextInput style={{...styles.input,  width:300}} 
          placeholder='e.g Math_Exam'
          onChangeText={(val) => setProject(val)}/>
        </View>
      </View>
      <View style={styles.hor}>
        <View style={styles.in}>
          <Text>Duration (hours): </Text>
          <TextInput style={styles.input} 
          placeholder='e.g 5 (hours)'
          onChangeText={(val) => setDuration_H(val)}/> 
        </View>
      </View>
      <View style={styles.hor}>
        <View style={styles.in}>
          <Text>From: </Text>
          <TextInput style={styles.input} 
          placeholder='e.g Math_Exam'
          onChangeText={(val) => setProject(val)}/> 
        </View>
        <View style={styles.in}>
          <Text>To: </Text>
          <TextInput style={styles.input} 
          placeholder='e.g 5 (hours)'
          onChangeText={(val) => setDuration_H(val)}/> 
        </View>
      </View>
      <View style={styles.hor}>
        <View style={styles.in}>
          <Text>Minimal time:</Text>
          <DatePicker
          testID='dateTimePicker'
          value = {startDate}
          mode = "date" 
          is24Hour={true}
          display='default'
          onChange={onchange}/>
        </View>
        <View style={styles.in}>
          <Text>Maximal time:</Text>
          <DatePicker
          testID='dateTimePicker'
          value = {endDate}
          mode = "date" 
          is24Hour={true}
          display='default'
          onChange={onchange2}/>
        </View>
      </View>
      <View style={{...styles.in, flex:0.5}} >
        <Text>Notes: </Text>
        <TextInput style={{...styles.input, width:300, height:"100%"}} 
          placeholder='e.g What I like'
          onChangeText={(val) => setNotes(val)}/>
      </View>
      <StatusBar style="auto" />
      <View style={styles.hor}>
        <Button
          title='cancel'>
          Cancel
        </Button>
        <Button
          title='ok'>
          OK
        </Button>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    // flex:1,
     borderWidth: 1,
     borderColor: '#777',
     padding: 8,
     marginVertical: 10,
     width: 130,
  },
  hor: {
    flexDirection: "row",
    justifyContent:'space-around',
    // flex:1,
    width:"100%",

    height: 70
  },
  in: {
    // flex:1,
    // minWidth: 70,
    alignItems:'center'
  }
});
