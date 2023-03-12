import { nanoid } from 'nanoid'
import notes from './notes.js'

const addNote = (request, h) => {
  const { title, tags, body } = request.payload

  if (title === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan catatan, mohon isi judul catatan'
    })

    response.code(400)
    return response
  }

  if (body === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan catatan, mohon isi body catatan'
    })

    response.code(400)
    return response
  }

  const id = nanoid(16)
  const createdAt = new Date().toLocaleString()
  const updatedAt = createdAt
  const newNote = { title, tags, body, id, createdAt, updatedAt }

  notes.push(newNote)

  const isSuccess = notes.filter(n => n.id === id).length > 0
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id
      }
    })

    response.code(201)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal menambahkan catatan'
  })

  response.code(500)
  return response
}

const readAllnotes = () => ({
  status: 'success',
  data: {
    notes: notes.map(n => ({
      id: n.id,
      title: n.title,
      tags: n.tags,
      body: n.body
    }))
  }
})

const readNote = (request, h) => {
  const { id } = request.params

  const note = notes.filter(n => n.id === id)[0]
  if (note !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        note
      }
    })

    response.code(200)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan'
  })

  response.code(404)
  return response
}

const updateNote = (request, h) => {
  const { id } = request.params
  const { title, tags, body } = request.payload
  const updatedAt = new Date().toLocaleString()

  const index = notes.findIndex(n => n.id === id)
  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt
    }

    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui'
    })

    response.code(200)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal diperbarui, id tidak ditemukan'
  })

  response.code(404)
  return response
}

const deleteNote = (request, h) => {
  const { id } = request.params

  const index = notes.findIndex(n => n.id === id)
  if (index !== -1) {
    notes.splice(index, 1)

    const response = h.response({
      status: 'success',
      message: 'Catatan Berhasil dihapus'
    })

    response.code(200)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus, id tidak ditemukan'
  })

  response.code(404)
  return response
}

export { addNote, readAllnotes, readNote, updateNote, deleteNote }
