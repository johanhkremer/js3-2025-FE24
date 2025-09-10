const questions = [
    {
        id: 1,
        text: "What does useState do in React?",
        options: [
            "Renders the component on the server",
            "Stores and updates the component's local state",
            "Navigates between pages",
            "Fetches data from an API"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        text: "What are props?",
        options: [
            "A built-in database in React",
            "An event object",
            "Data passed from parent to child component",
            "A CSS class in React"
        ],
        correctIndex: 2
    },
    {
        id: 3,
        text: "What is useEffect mainly used for?",
        options: [
            "Handling page navigation",
            "Performing side effects like data fetching or timers",
            "Creating new components",
            "Styling components"
        ],
        correctIndex: 1
    },
    {
        id: 4,
        text: "Which statement about React components is true?",
        options: [
            "They must always be class-based",
            "They can be functions or classes",
            "They can only return one HTML tag",
            "They are always compiled directly in the browser without transpilation"
        ],
        correctIndex: 1
    },
    {
        id: 5,
        text: "What does JSX stand for?",
        options: [
            "JavaScript XML",
            "JavaScript Xperience",
            "Java Syntax Extension",
            "JSON Extended"
        ],
        correctIndex: 0
    },
    {
        id: 6,
        text: "Which attribute is used in React instead of 'class' in HTML?",
        options: [
            "class",
            "classname",
            "className",
            "cssClass"
        ],
        correctIndex: 2
    },
    {
        id: 7,
        text: "What is the purpose of React Router?",
        options: [
            "Handling navigation between different views/pages",
            "Optimizing component performance",
            "Managing global state",
            "Formatting CSS"
        ],
        correctIndex: 0
    },
    {
        id: 8,
        text: "What does a React component return?",
        options: [
            "Always a string",
            "A JSX element",
            "A JSON file",
            "An API call"
        ],
        correctIndex: 1
    },
    {
        id: 9,
        text: "Which hook is used to create local state in a component?",
        options: [
            "useData",
            "useStore",
            "useState",
            "useEffect"
        ],
        correctIndex: 2
    },
    {
        id: 10,
        text: "What happens when state is updated in a component?",
        options: [
            "Only the variable changes, nothing else",
            "The component re-renders with the new value",
            "The whole page reloads",
            "Nothing happens until you navigate again"
        ],
        correctIndex: 1
    },
];

export default questions;
