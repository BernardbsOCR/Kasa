import ServerAPI from '../Server'

export async function getAll() {
  const announcements = await ServerAPI.serverGetAll()

  return announcements.result ? announcements.result : null
}

export async function getOne(id) {
  const announcement = await ServerAPI.serverGetOne(id)

  return announcement.result ? announcement.result : null
}

/* ----------------------------- */
