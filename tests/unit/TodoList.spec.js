import { mount } from '@vue/test-utils';
import TodoList from '../../src/components/TodoList.vue';
import TodoItem from '../../src/components/TodoItem.vue';

describe('TodoList.vue', () => {
  it('should contain a list of Todo items', () => {
    const todos =[{ id: 1, name: 'Wash the dishes' }];
    const wrapper = mount(TodoList, {
      data() {
        return {
          todos,
        };
      },
    });

    const liWrapper = wrapper.find(TodoItem).text();

    // expect(wrapper.vm.todos).toContainEqual(todos[0]);
    expect(liWrapper).toBe(todos[0].name);
  });
});
