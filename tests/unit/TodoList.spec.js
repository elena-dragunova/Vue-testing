import { mount } from '@vue/test-utils';
import TodoList from '../../src/components/TodoList.vue';
import TodoItem from '../../src/components/TodoItem.vue';
import TodoInput from '../../src/components/TodoInput.vue';

describe('TodoList.vue', () => {
  it('should contain a list of Todo items', () => {
    const todos = [{ id: 1, name: 'Wash the dishes' }];
    const wrapper = mount(TodoList, {
      data() {
        return {
          todos,
        };
      },
    });
    const liWrapper = wrapper.find(TodoItem).text();

    expect(liWrapper).toBe(todos[0].name);
  });

  it('should add an item to the todo list', () => {
    const wrapper = mount(TodoList);
    const { todos } = wrapper.vm;
    const newTodos = wrapper.vm.addTodo('Go to work');

    expect(todos.length).toBeLessThan(newTodos.length);
  });

  it('should add an id to each todo item', () => {
    const wrapper = mount(TodoList);
    const newTodos = wrapper.vm.addTodo('Go to work');

    // eslint-disable-next-line array-callback-return
    newTodos.map((item) => {
      expect(item.id).toBeTruthy();
    });
  });

  it('should add an item to the todo list when the button is clicked', () => {
    const wrapper = mount(TodoList);
    const { todos } = wrapper.vm;
    wrapper.find('form').trigger('submit', 'Clean the car');
    const newTodos = wrapper.vm.todos;

    expect(todos.length).toBeLessThan(newTodos.length);
  });

  it('should call addTodo when form is submitted', () => {
    const wrapper = mount(TodoList);
    // eslint-disable-next-line no-unused-vars
    const spy = jest.spyOn(wrapper.vm, 'addTodo');
    wrapper.find('form').trigger('submit', 'Clear the car');

    expect(wrapper.vm.addTodo).toHaveBeenCalled();
  });

  it('should add an item to the todolist when the addTodo event happens', () => {
    const wrapper = mount(TodoList);
    const { todos } = wrapper.vm;
    wrapper.find(TodoInput).vm.$emit('addTodo', 'Clean the car');
    const newTodos = wrapper.vm.todos;
    expect(todos.length).toBeLessThan(newTodos.length);
  });
});
