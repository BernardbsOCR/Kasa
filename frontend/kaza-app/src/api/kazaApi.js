import annonces from '../datas/annonces.json'

const kazaApi = {
  getAll: function () {
    return new Promise((result, error) => {
      const jsonDatas = JSON.stringify(annonces)
      const data = JSON.parse(jsonDatas)

      result(data)
    })
  },

  getOne: function () {
    return new Promise((result, error) => {
      const jsonDatas = JSON.stringify(annonces)
      const data = JSON.parse(jsonDatas)

      result(data)
    })
  },
}

export default kazaApi
