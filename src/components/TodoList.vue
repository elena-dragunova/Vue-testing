<template>
  <div>
    <h1>To Do List</h1>
    <ul>
      <TodoItem v-for="todo in todos"
                :key="todo.id"
                :todo="todo"/>
    </ul>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss">
  ul, li {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
</style>
