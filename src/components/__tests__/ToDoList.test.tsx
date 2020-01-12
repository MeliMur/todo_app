import React from "react";
import { shallow } from "enzyme";
import { ToDoList } from "../ToDoList";

describe("<ToDoList/>", () => {
  const wrapper = shallow(<ToDoList />);

  it("should render empty list", () => {
    const listItems = wrapper.find(".app__todo__list").children().length;
    expect(listItems).toBe(0);
  });

  it("should add item to the list", () => {
    const inputField = wrapper.find(".app__todo__input");
    inputField.simulate("keyDown", {
      key: "Enter",
      currentTarget: {
        value: "New Item"
      }
    });

    const listItems = wrapper.find(".app__todo__list").children().length;
    const firstItem = wrapper.find("ToDoItem").prop("task");

    expect(listItems).toBe(1);
    expect(firstItem).toEqual({"isCompleted": false, "text": "New Item"});
  });
});
