import { mount } from '@vue/test-utils';
import TodoInput from '../../src/components/TodoInput.vue';

describe('TodoInput.vue', () => {
  it('should fire an event named addTodo with todo name', () => {
    const mock = jest.fn();
    const wrapper = mount(TodoInput);

    wrapper.vm.$on('addTodo', mock);
    wrapper.vm.addTodo('Clean the car');

    expect(mock).toBeCalledWith('Clean the car');
  });
});
