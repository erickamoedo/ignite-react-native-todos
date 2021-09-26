import { numberTypeAnnotation } from '@babel/types';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const data = {
        id: Number(new Date().getTime()),
        title: newTaskTitle,
        done: false,
       
    }
    // aqui eu pego todos os valores e coloco em uma matriz
    setTasks( oldState => [...oldState, data])


  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
  
    
    // aqui eu filtro as task 
    const updatedTasks = tasks.map(task => ({...task}))

    const foundItem = updatedTasks.find(item => item.id === id);

    if(!foundItem)
    return;
    foundItem.done = !foundItem.done;

    // para nao quebrar o principio da imutabilidade, eu seto dps o update
    setTasks(updatedTasks);

   
  }


  function handleRemoveTask(id: number) {
    //TODO - remove task from state
 
    setTasks(oldState => oldState.filter( item => item.id !== id )); //listo o estato, so que agora com filtro para tirar ele da selecao
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})