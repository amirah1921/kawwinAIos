import React, { useState, useEffect } from 'react';
import Background from "../component/Background";
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';

const TodoList = () => {
  // Todo List State
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Task 1', status: 'incomplete', date: '2023-09-15' },
    { id: '2', text: 'Task 2', status: 'complete', date: '2023-09-15' },
    { id: '3', text: 'Task 3', status: 'inProgress', date: '2023-09-16' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Date Picker State
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState('');

  useEffect(() => {
    // Calculate the day of the week when the selected date changes
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDayIndex = new Date(selectedDate).getDay(); // 0 for Sunday, 1 for Monday, etc.
    const selectedDayName = dayNames[selectedDayIndex];
    setDayOfWeek(selectedDayName);
  }, [selectedDate]);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  // Filter tasks based on the selected date and status
  const filteredTasks = tasks.filter((task) => task.date === selectedDate);

  // Create an object to store marked dates for the hidden calendar
  const markedDates = {};

  // Add a red dot to dates that have tasks
  tasks.forEach((task) => {
    markedDates[task.date] = { marked: true, dotColor: 'red' };
  });

  // Todo List Functions
  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: Date.now().toString(),
        text: newTaskText,
        status: 'incomplete',
        date: selectedDate,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskText('');
    }
  };

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status:
              task.status === 'incomplete'
                ? 'inProgress'
                : task.status === 'inProgress'
                ? 'complete'
                : 'incomplete',
          }
        : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.datePickerContainer}>
          <Text style={styles.title}>Select Date</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <View style={styles.dayDateContainer}>
              <Text style={styles.daysOfWeek}>{dayOfWeek} || </Text>
              <Text style={styles.selectedDate}>{selectedDate}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal isVisible={isDatePickerVisible}>
          <View style={styles.modalContainer}>
            <Calendar
              onDayPress={(day) => {
                setSelectedDate(day.dateString);
                hideDatePicker();
              }}
              markedDates={markedDates} // Add marked dates with red dots
            />
            <TouchableOpacity onPress={hideDatePicker} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={styles.todoContainer}>
          <Text style={styles.todoListTitle}>To-Do List</Text>
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={() => handleToggleTask(task.id)}
              onEdit={(id, newText) => handleEditTask(id, newText)}
            />
          ))}
          <TextInput
            placeholder="Enter a new task..."
            placeholderTextColor="white"
            value={newTaskText}
            onChangeText={setNewTaskText}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
            <Text style={{ color: 'white' }}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
};

const TodoItem = ({ task, onToggle, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSaveEdit = () => {
    onEdit(task.id, editedText);
    setEditing(false);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onToggle}>
        <Text
          style={
            task.status === 'incomplete'
              ? styles.incompleteText
              : task.status === 'inProgress'
              ? styles.inProgressText
              : styles.completeText
          }
        >
          {task.status === 'incomplete' ? '❌' : task.status === 'inProgress' ? '⏳' : '✔'}
        </Text>
      </TouchableOpacity>
      {editing ? (
        <TextInput
          value={editedText}
          onChangeText={setEditedText}
          autoFocus
          onBlur={handleSaveEdit}
          style={styles.editInput}
        />
      ) : (
        <Text style={styles.taskText}>{task.text}</Text>
      )}
      <TouchableOpacity onPress={() => setEditing(true)}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datePickerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  selectedDate: {
    fontSize: 16,
    marginTop: 10,
    color: '#ffffff',
  },
  daysOfWeek: {
    fontSize: 16,
    marginTop: 10,
    color: '#ffffff',
  },
  dayDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  todoContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  todoListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '70%',
    marginBottom: 10,
  },
  addButton: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#8247C5',
    borderRadius: 5,
    text: '#ffffff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  doneText: {
    fontSize: 18,
    color: 'green',
  },
  undoneText: {
    fontSize: 18,
    color: 'red',
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  editInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    padding: 0,
  },
});

export default TodoList;
