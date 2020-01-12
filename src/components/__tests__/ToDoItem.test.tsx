import { mount } from "enzyme";
import { ITask, ToDoItem } from "../ToDoItem";
import React from "react";

describe("<ToDoItem/>", () => {
  const removeTaskMock = jest.fn();
  const toggleTaskMock = jest.fn();
  const mockTask: ITask = {
    isCompleted: false,
    text: "Must write unit tests"
  };

  const wrapper = mount(
    <ToDoItem
      task={mockTask}
      removeTask={removeTaskMock}
      toggleTask={toggleTaskMock}
    />
  );

  it("should render", () => {
    expect(wrapper.find(".app__todo__list__item__value").text()).toBe(
      "Must write unit tests"
    );
  });

  it("should not be completed", () => {
    expect(toggleTaskMock).toBeCalledTimes(0);
    expect(wrapper.exists(".app__todo__list__item--incomplete")).toBe(true);
  });

  it("should mark item as completed", () => {
    const checkBox = wrapper.find('input[type="checkbox"]').first();
    checkBox.simulate("change");

    expect(toggleTaskMock).toBeCalledTimes(1);
  });

  it("should remove list item", () => {
    const checkBox = wrapper.find("button").first();
    checkBox.simulate("click");
    expect(removeTaskMock).toBeCalledTimes(1);
  });
});
