import annonces from '../datas/annonces.json'

function loadAnnouncements() {
  return new Promise((result, error) => {
    const jsonDatas = JSON.stringify(annonces)
    const data = JSON.parse(jsonDatas)

    result(data)
  })
}

export default loadAnnouncements
