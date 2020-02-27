<template>
  <div>
    <h1>To Do List</h1>
    <ul>
      <TodoItem v-for="todo in todos"
                :key="todo.id"
                :todo="todo"/>
    </ul>

    <form @submit.prevent="addTodo(todoName)">
      <input type="text" v-model="todoName">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [
        { id: 1, name: 'Wash the dishes' },
        { id: 2, name: 'Clean the car' },
        { id: 3, name: 'Learn about VueJS' },
      ],
    };
  },
  methods: {
    addTodo(name) {
      this.todos = [...this.todos, { id: uuidv4(), name }];
      return this.todos;
    },
  },
};
</script>

<style lang="scss">
  ul, li {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
</style>
