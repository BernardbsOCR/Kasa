import ServerAPI from '../Server'

// Get All announcements
export async function getAll() {
  const announcements = await ServerAPI.serverGetAll()

  return announcements.result ? announcements.result : null
}

// Get one announcement with id
export async function getOne(id) {
  const announcement = await ServerAPI.serverGetOne(id)

  return announcement.result ? announcement.result : null
}
