import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [inputext, setInputext] = useState('')
  const [todolist, setTodoList] = useState([])

  function InputText(input) {
    // console.log(input)
    setInputext(input)
  }

  function AddTask() {
    if (inputext == '') { alert('Please write a task') }
    else { setTodoList([...todolist, inputext]) }
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to Most Simple To-Do App</Text>
      <TextInput style={styles.inputText} placeholder='Enter a task' onChangeText={InputText} />
      <Button style={styles.button} title='add task' onPress={AddTask} />
      <ScrollView style={styles.todolist}>
        {todolist.map((todo) => <Text style={styles.todo} key={todo}>{todo}</Text>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width : '50%',
    // height : '50%',
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  inputText: {
    borderWidth: 1,
    height: 35,
    width: '80%',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    // width: '80%',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  todolist: {
    width: '80%',
    textAlign: 'left',
  },
  todo: {
    marginVertical: 2,
    borderWidth: 1,
    paddingHorizontal: 5
  }
});
