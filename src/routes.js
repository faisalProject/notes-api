import { addNote, readAllnotes, readNote, updateNote, deleteNote } from './handler.js'

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNote
  },
  {
    method: 'GET',
    path: '/notes',
    handler: readAllnotes
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: readNote
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNote
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNote
  }
]

export default routes
