import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';



const tasks = [
  { id: '1', title: 'Study lesson', time: '', icon: 'book', completed: false },
  { id: '2', title: 'Run 5k', time: '4:00pm', icon: 'trophy', completed: false },
  { id: '3', title: 'Go to party', time: '10:00pm', icon: 'calendar', completed: false },
];

const completedTasks = [
  { id: '4', title: 'Game meetup', time: '1:00pm', icon: 'game-controller', completed: true },
  { id: '5', title: 'Take out trash', time: '', icon: 'trash-outline', completed: true },
];

const TaskItem = ({ item }) => (
  <View style={styles.taskItem}>
    <View style={styles.taskIconContainer}>
      <AntDesign name={item.icon} size={24} color="#fff" />
       </View>
    <View style={styles.taskDetails}>
      <Text style={[styles.taskTitle, item.completed && styles.completedTaskTitle]}>{item.title}</Text>
      {item.time && <Text style={styles.taskTime}>{item.time}</Text>}
    </View>
    <TouchableOpacity style={styles.checkbox}>
      {item.completed && <AntDesign name="checksquaro" size={24} color="#fff" />}
    </TouchableOpacity>
  </View>
);

const TodoListScreen = () => {
  const [date] = useState('October 20, 2022');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <Text style={styles.title}>My Todo List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem item={item} />}
        ListHeaderComponent={() => <Text style={styles.sectionTitle}>Completed</Text>}
        ListHeaderComponentStyle={{ marginTop: 20 }}
      />
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem item={item} />}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#6A1B9A',
    padding: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A1B9A',
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskIconContainer: {
    backgroundColor: '#6A1B9A',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  taskDetails: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  completedTaskTitle: {
    textDecorationLine: 'line-through',
    color: '#9E9E9E',
  },
  taskTime: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#6A1B9A',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#6A1B9A',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoListScreen;