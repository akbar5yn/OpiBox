export const state = () => ({
  selectedImg: [],
  showPreview: false,
  showModal: false,
  form: {
    judul: '',
    desc: '',
    projectType: '',
    selectedAkses: ''
  }
})

export const mutations = {
  setSelectedImg (state, selectedImg) {
    state.selectedImg.push(selectedImg)
  },

  setShowPreview (state, value) {
    state.showPreview = value
  },

  setShowModal (state, value) {
    state.showModal = value
  },

  setJudul (state, judul) {
    state.form.judul = judul
  },

  setDesc (state, deskripsi) {
    state.form.desc = deskripsi
  },

  setType (state, setType) {
    state.form.projectType = setType
  },

  setAkses (state, setAkses) {
    state.form.selectedAkses = setAkses
  }
}

export const actions = {
  async postData ({ state }) {
    try {
      const postData = {
        title: state.form.judul,
        caption: state.form.desc,
        project_type: state.form.projectType,
        team_id: state.form.selectedAkses,
        images_attributes: [{ image: state.selectedImg[0] }]
      }

      const response = await this.$axios.$post('projects', postData)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Failed to post data')
    }
  }
  // async postData ({ state }) {
  //   try {
  //     const formData = new FormData()
  //     formData.append('images_attributes[0][image]', state.selectedImg)
  //     formData.append('title', state.form.judul)
  //     formData.append('caption', state.form.desc)
  //     formData.append('project_type', state.form.projectType)
  //     formData.append('team_id', state.form.selectedAkses)

  //     const response = await this.$axios.$post('projects', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     })

  //     console.log('Gambar berhasil diunggah.', response.data)
  //     return response.data
  //   } catch (error) {
  //     console.error('Terjadi kesalahan saat mengunggah gambar.', error)
  //     throw new Error('Gagal mengunggah gambar')
  //   }
  // }
}
