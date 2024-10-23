import { renderCategories } from "./helpers/render-categories-helper.js";
import { render } from "./helpers/render-tasks-helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        title: "Wyrzucić śmieci",
        done: false,
    },
    {
        title: "Zrobić projekt",
        done: true,
        category: "work",
    },
    {
        title: "Wyprowadzić psa",
        done: false,
        category: "hobby",
    }
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
