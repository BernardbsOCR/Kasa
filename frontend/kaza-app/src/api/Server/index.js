import annonces from '../../datas/annonces.json'

const ServerAPI = {
  serverGetAll: function () {
    return new Promise((result, error) => {
      result({ result: annonces })
      error({ error: 'error 500' })
    })
  },

  serverGetOne: function (id) {
    return new Promise((result, error) => {
      const jsonDatas = JSON.stringify(annonces)
      const announcements = JSON.parse(jsonDatas)

      const data = announcements.find((annonces) => annonces.id === id)
      result({ result: data })
      error({ error: 'error 500' })
    })
  },
}

export default ServerAPI
