import {dateObjectToString, getNewDate} from '../common/date';

let fakeUsers = [
    {
        id: 1,
        first_name: "Taha",
        last_name: "Boyraz",
        birth_date: new Date("12-31-1988").toISOString(),
        todos: [
            {
                id: 1,
                created_date: new Date("12-31-2001").toISOString(),
                for_date: new Date("12-31-2001").toISOString(),
                title: "Say Hello",
                description: "Hello, World!",
            },
            {
                id: 2,
                created_date: new Date("12-31-2001").toISOString(),
                for_date: new Date("12-31-2001").toISOString(),
                title: "Wash your hands.",
                description: "Wash your dirty hands, bro!",
            },
            {
                id: 3,
                created_date: new Date("01-01-2002").toISOString(),
                for_date: new Date("01-01-2002").toISOString(),
                title: "Go to computer repair.",
                description: "You need to have your computer repaired!",
            },
            {
                id: 4,
                created_date: new Date("01-02-2002").toISOString(),
                for_date: new Date("01-02-2002").toISOString(),
                title: "Do workout.",
                description: "Get strength!",
            },
        ]
    },
    {
        id: 2,
        first_name: "Polat",
        last_name: "Alemdar",
        birth_date: new Date("05-21-1972").toISOString(),
        todos: [
            {
                id: 5,
                created_date: new Date("11-12-2004").toISOString(),
                for_date: new Date("11-12-2004").toISOString(),
                title: "Buy some weapon.",
                description: "Guns needed for enemies.",
            },
            {
                id: 6,
                created_date: new Date("11-13-2004").toISOString(),
                for_date: new Date("11-13-2004").toISOString(),
                title: "Raid your enemies place.",
                description: "Revenge Time!",
            },
            {
                id: 7,
                created_date: new Date("11-13-2004").toISOString(),
                for_date: new Date("11-13-2004").toISOString(),
                title: "Go to hospital.",
                description: "Heal yourself.",
            },
            {
                id: 8,
                created_date: new Date("11-13-2004").toISOString(),
                for_date: new Date("11-13-2004").toISOString(),
                title: "Do workout.",
                description: "Get strength bruhh!",
            },
        ]
    },
    {
        id: 3,
        first_name: "Luffy",
        last_name: "Monkey D.",
        birth_date: new Date("03-12-2001").toISOString(),
        todos: [
            {
                id: 9,
                created_date: new Date("01-21-2018").toISOString(),
                for_date: new Date("01-21-2018").toISOString(),
                title: "Play computer game with Usopp!",
                description: "Let Usopp think that he is a hero :)",
            },
            {
                id: 10,
                created_date: new Date("01-21-2018").toISOString(),
                for_date: new Date("01-21-2018").toISOString(),
                title: "Catch some big fish monsters.",
                description: "Sanji needs somethings to cook!",
            },
            {
                id: 11,
                created_date: new Date("01-22-2018").toISOString(),
                for_date: new Date("01-22-2018").toISOString(),
                title: "Go to Dressrosa.",
                description: "Doflamingo kills people. They need your help!",
            },
            {
                id: 12,
                created_date: new Date("01-22-2018").toISOString(),
                for_date: new Date("01-22-2018").toISOString(),
                title: "Beat Doffy",
                description: "Make him eat his ropes!",
            },
        ]
    },
    {
        id: 4,
        first_name: "Abuzer",
        last_name: "K??m??rc??",
        birth_date: new Date("08-19-1962").toISOString(),
        todos: []
    },
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const findHighestTodoId = (arrayUsers) => {
    const ids = arrayUsers.reduce((acc, val) => {
        acc.push(...val.todos)
        return acc;
    }, []).map(pre => pre.id);
    return Math.max(...ids)
}

export const findDistinctTodoDates = (userId) => {
    let parsedId = parseInt(userId);
    const distinct = [];
    let dates = null;
    const user = fakeUsers.find(pre => pre.id === parsedId);
    if(user){
        dates = user.todos.map(pre => pre.for_date);
        dates = dates.sort((a, b) => new Date(b) - new Date(a));
        dates.forEach(date => {
            let _date = dateObjectToString(date)
            if(!distinct.includes(_date)){
                distinct.push(_date);
            }
        })
    } else return null;
    return distinct
}

export const getUserDataById = async (userId) => {
    let parsedId = parseInt(userId)
    console.log("getting data /api")
    await sleep(500);
    const user = fakeUsers.find(pre => pre.id === parsedId);
    if(!user) return null;
    return {id: user.id, first_name: user.first_name, last_name: user.last_name, birth_date: user.birth_date};
}

export const getUserTodos = async (userId, for_date = null) => {
    let parsedId = parseInt(userId);
    console.log("getting todo /api");
    await sleep(600);
    let userTodos = fakeUsers.find(pre => pre.id === parsedId)?.todos;
    if(!userTodos) return [];
    for_date && (userTodos = userTodos.filter(pre => pre.for_date === for_date))
    return userTodos.map(pre => ({...pre, belongsUser: parseInt(userId)})).sort((first, last) => first.id - last.id);
}

export const deleteTodoById = async (todoId) => {
    let parsedId = parseInt(todoId);
    console.log("deleting /api")
    await sleep(500);
    const user = {...fakeUsers.find(pre => pre.todos.map(_pre => _pre.id).includes(parsedId))}
    user.todos = user.todos.filter(pre => pre.id !== parsedId);
    fakeUsers = [...fakeUsers.filter(pre => pre.id !== user.id), user]
    console.log(user);
    return getUserTodos(user.id);
}

export const addUserTodo = async (todo) => {
    await sleep(500);
    const parsedUserId = parseInt(todo.userId)
    const user = {...fakeUsers.find(pre => pre.id === parsedUserId)}
    user.todos.push({
        title: todo.title, 
        description: todo.description,
        for_date: todo.for_date,
        created_date: getNewDate(),
        id: findHighestTodoId(fakeUsers) + 1,
    })
    fakeUsers = [...fakeUsers.filter(pre => pre.id !== user.id), user]
    console.log(user);
    return getUserTodos(parsedUserId);
}

export const editUserTodo = async (todo) => {
    await sleep(500);
    const user = {...fakeUsers.find(pre => pre.id === todo.belongsUser)}
    user.todos = user.todos.filter(pre => pre.id !== todo.id);
    user.todos.push(todo);
    fakeUsers = [...fakeUsers.filter(pre => pre.id !== user.id), user];
    console.log(fakeUsers);
    return getUserTodos(todo.belongsUser);
}