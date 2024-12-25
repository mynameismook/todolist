import Todo from 'App/Models/Todo'

export default class TodosController {
    public async index() {
        return await Todo.all()
    }

    public async store({ request }) {
        const { title } = request.all()
        const todo = await Todo.create({ title })
        return todo
    }

    public async update({ params, request }) {
        const todo = await Todo.findOrFail(params.id)
        const { completed } = request.all()
        todo.completed = completed
        await todo.save()
        return todo
    }

    public async destroy({ params }) {
        const todo = await Todo.findOrFail(params.id)
        await todo.delete()
        return { message: 'Todo deleted' }
    }
}
