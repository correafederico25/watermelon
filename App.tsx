import React, {useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import Task from './models/taskModel';
import {TaskProvider, useTasks} from './context/taskContex';

interface TaskItem {
  item: Task;
}

const TaskListItem = ({item}: TaskItem) => {
  const {deleteTask} = useTasks();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={() => deleteTask(item)}>
        <Text style={{color: 'red'}}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const Component = () => {
  const [title, setTitle] = useState('');
  const {tasks, addTask} = useTasks();

  const addNewTask = async () => {
    await addTask(title);
    setTitle('');
  };

  return (
    <SafeAreaView>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        value={title}
        onChangeText={setTitle}
        placeholder="Add a new task"
      />
      <Button title="Add" onPress={addNewTask} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TaskListItem item={item} />}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <TaskProvider>
      <Component />
    </TaskProvider>
  );
};

export default App;

/*
import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {database} from './database';
import Task from './taskModel';
import withObservables from '@nozbe/with-observables';

interface TaskItem {
  item: Task;
}

const TaskListItem = ({item}: TaskItem) => {
  const deleteTask = async () => {
    await database.write(async () => {
      await item.destroyPermanently();
    });
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={deleteTask}>
        <Text style={{color: 'red'}}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const EnhancedTaskListItem = withObservables(['item'], ({item}) => ({
  item: item.observe(),
}))(TaskListItem);

interface AppProps {
  tasks: Task[];
}

const App: React.FC<AppProps> = ({tasks}) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  const addTask = async () => {
    await database.write(async () => {
      await database.collections.get<Task>('tasks').create(task => {
        task.title = title;
        task.isCompleted = false;
      });
    });

    setTitle('');
  };

  return (
    <SafeAreaView>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        value={title}
        onChangeText={setTitle}
        placeholder="Add a new task"
      />
      <Button title="Add" onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <EnhancedTaskListItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default withObservables([], () => ({
  tasks: database.collections.get<Task>('tasks').query().observe(),
}))(App);
*/
