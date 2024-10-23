import { renderCategories } from "./helpers/render-categories-helper.js";
import { render } from "./helpers/render-tasks-helper.js";
import { Category, Task } from "./types";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;
const categories: Category[] = ["general", "work", "gym", "hobby"];
const tasks: Task[] = [
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

const addTask = (task: Task) => {
    tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({title: taskNameInputElement.value, done: false, category: selectedCategory});
    render(tasks, tasksContainerElement);
});

renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
