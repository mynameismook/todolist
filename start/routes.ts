import Route from '@ioc:Adonis/Core/Route'

Route.get('api/todos', 'TodosController.index')
Route.post('api/todos', 'TodosController.store')
Route.put('api/todos/:id', 'TodosController.update')
Route.delete('api/todos/:id', 'TodosController.destroy')
