import { useState } from 'react';
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet
} from 'react-native';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAddTask = (operator) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1)) {
      let res;
      switch (operator) {
        case '+':
          if (!isNaN(num2)) res = num1 + num2;
          else res = 'Invalid Input';
          break;
        case '-':
          if (!isNaN(num2)) res = num1 - num2;
          else res = 'Invalid Input';
          break;
        case '*':
          if (!isNaN(num2)) res = num1 * num2;
          else res = 'Invalid Input';
          break;
        case '/':
          if (!isNaN(num2) && num2 !== 0) res = num1 / num2;
          else if (isNaN(num2)) res = 'Invalid Input';
          else res = 'Error';
          break;
        case '^':
          if (!isNaN(num2)) res = Math.pow(num1, num2);
          else res = 'Invalid Input';
          break;
        case '√':
          res = Math.sqrt(num1);
          if (isNaN(res)) res = 'Invalid Input';
          break;
        default:
          res = 'Invalid Operation';
      }
      setResult(res.toString());
    } else {
      setResult('Invalid Input');
    }
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.heading}>Calculator</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input}
          placeholder="Enter number"
          value={number1}
          onChangeText={(text) => setNumber1(text)}
          keyboardType="numeric"
        /> 
        <TextInput 
          style={styles.input}
          placeholder="Enter number"
          value={number2}
          onChangeText={(text) => setNumber2(text)}
          keyboardType="numeric"
        /> 
      </View>
      <View>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => handleAddTask('+')}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity> 
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => handleAddTask('-')}
        >
          <Text style={styles.addButtonText}>-</Text>
        </TouchableOpacity> 
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => handleAddTask('*')}
        >
          <Text style={styles.addButtonText}>*</Text>
        </TouchableOpacity> 
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => handleAddTask('/')}
        >
          <Text style={styles.addButtonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => handleAddTask('^')}
        >
          <Text style={styles.addButtonText}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => handleAddTask('√')}
        >
          <Text style={styles.addButtonText}>√</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}> 	
        <Text>Answer: {result}</Text>
      </View>
    </View>	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,    	
  },
  heading: {
    fontSize: 24, 
    marginBottom: 10, 
  },
  inputContainer: {
    alignItems: 'center', 
    marginBottom: 50,
    padding: 10,
  }, 
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal: 10, 
    marginBottom: 10,
    width: '100%'
  },
  addButton: {
    width: 40, 
    height: 40, 
    backgroundColor: 'pink',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  addButtonText: {
    fontSize: 24, 
    color: '#fff',
  },
  tasksContainer: {
    marginTop: 20, 
  },
});

export default App;