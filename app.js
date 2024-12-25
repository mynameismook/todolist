const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: []
        };
    },
    mounted() {
        this.fetchTodos();
    },
    methods: {
        async fetchTodos() {
            const response = await fetch('http://localhost:3000/api/todos');
            const data = await response.json();
            this.todos = data;
        },
        async addTodo() {
            if (this.newTodo.trim() === '') return;

            const newTodo = { title: this.newTodo, completed: false };
            const response = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTodo)
            });
            const data = await response.json();
            this.todos.push(data);
            this.newTodo = '';
        },
        async toggleComplete(id) {
            const todo = this.todos.find(t => t.id === id);
            todo.completed = !todo.completed;

            await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(todo)
            });
        },
        async deleteTodo(id) {
            await fetch(`http://localhost:3000/api/todos/${id}`, { method: 'DELETE' });
            this.todos = this.todos.filter(t => t.id !== id);
        }
    }
});

app.mount('#app');
