import { mount } from '@vue/test-utils';
import TodoItem from '../../src/components/TodoItem.vue';

describe('TodoItem.vue', () => {
  it('should display name of the todo item', () => {
    const todo = { id: 1, name: 'Wash the dishes' };
    const wrapper = mount(TodoItem, { propsData: { todo } });

    const liWrapper = wrapper.find('li').text();

    expect(liWrapper).toBe(todo.name);
  })
});
