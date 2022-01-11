export default {
    namespaced: true,
    state: {
        products: null,
        newProduct: null,
        deleteProduct: null
    },
    mutations: {
      setProducts(state, payload){
          state.products = payload
      },
      setNewProduct(state, payload){
          state.newProduct = payload
      },
      setDeleteProduct(state, payload){
          state.deleteProduct = payload
      }
    },
    actions: {
      async getProducts({commit}){
          try {
              const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/products`, {
                  method: 'GET',
              })
              const response = await res.json()
              commit('setProducts', response)
              return response
          } catch (error) {
              console.log(error)
          }
      },
      async registerProduct({commit}, producto){
        try {
            const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/products`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto)
            })
            const resp = await res.json()
            commit('setNewProduct', resp)
            alert('Registro exitoso')

        } catch (error) {
            alert('Registro fallido')
            console.log(error)
        }
    },
    async deleteProduct({commit}, id){
        try {
            const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/products/${id}`, {
                method: 'DELETE'
            })
            const resp = await res.json()
            commit('setDeleteProduct', resp)
            alert('Registro borrado')

        } catch (error) {
            alert('Operacion fallida')
            console.log(error)
        }
    },
    }
  };