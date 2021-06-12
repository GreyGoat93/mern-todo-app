let fakeUsers = [
    {
        id: 1,
        first_name: "Taha",
        last_name: "Boyraz",
        birth_date: "31.12.1988",
        todos: [
            {
                id: 1,
                created_date: "31.12.2001",
                title: "Say Hello",
                description: "Hello, World!",
            },
            {
                id: 2,
                created_date: "31.12.2001",
                title: "Wash your hands.",
                description: "Wash your dirty hands, bro!",
            },
            {
                id: 3,
                created_date: "01.01.2002",
                title: "Go to computer repair.",
                description: "You need to have your computer repaired!",
            },
            {
                id: 4,
                created_date: "02.01.2002",
                title: "Do workout.",
                description: "Get strength!",
            },
        ]
    },
    {
        id: 2,
        first_name: "Polat",
        last_name: "Alemdar",
        birth_date: "21.05.1972",
        todos: [
            {
                id: 5,
                created_date: "12.11.2004",
                title: "Buy some weapon.",
                description: "Guns needed for enemies.",
            },
            {
                id: 6,
                created_date: "13.11.2004",
                title: "Raid your enemies place.",
                description: "Revenge Time!",
            },
            {
                id: 7,
                created_date: "13.11.2004",
                title: "Go to hospital.",
                description: "Heal yourself.",
            },
            {
                id: 8,
                created_date: "13.11.2004",
                title: "Do workout.",
                description: "Get strength bruhh!",
            },
        ]
    },
    {
        id: 3,
        first_name: "Luffy",
        last_name: "Monkey D.",
        birth_date: "12.03.2001",
        todos: [
            {
                id: 9,
                created_date: "21.01.2018",
                title: "Play computer game with Usopp!",
                description: "Let Usopp think that he is a hero :)",
            },
            {
                id: 10,
                created_date: "21.01.2018",
                title: "Catch some big fish monsters.",
                description: "Sanji needs somethings to cook!",
            },
            {
                id: 11,
                created_date: "22.01.2018",
                title: "Go to Dressrosa.",
                description: "Doflamingo kills people. They need your help!",
            },
            {
                id: 12,
                created_date: "22.01.2018",
                title: "Beat Doffy",
                description: "Make him eat his ropes!",
            },
        ]
    },
    {
        id: 4,
        first_name: "Abuzer",
        last_name: "Kömürcü",
        birth_date: "19.08.1962",
        todos: []
    },
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getUserDataById = async (userId) => {
    let parsedId = parseInt(userId)
    console.log("getting data /api")
    await sleep(500);
    const user = fakeUsers.find(pre => pre.id === parsedId);
    if(!user) return null;
    return {id: user.id, first_name: user.first_name, last_name: user.last_name, birth_date: user.birth_date};
}

export const getUserTodos = async (userId) => {
    let parsedId = parseInt(userId);
    console.log("getting todo /api");
    await sleep(600);
    const userTodos = fakeUsers.find(pre => pre.id === parsedId)?.todos;
    if(!userTodos) return [];
    return userTodos.map(pre => ({...pre, belongsUser: userId}));
}

export const deleteTodoById = async (todoId) => {
    let parsedId = parseInt(todoId);
    console.log("deleting /api")
    await sleep(500);
    const user = {...fakeUsers.find(pre => pre.todos.map(_pre => _pre.id).includes(parsedId))}
    user.todos = user.todos.filter(pre => pre.id !== parsedId);
    fakeUsers = [...fakeUsers.filter(pre => pre.id !== user.id), user]
    console.log(user);
    return user.todos;
}