const store = {

  /**
   * @description
   * * Obtiene el valor de una clave
   * @param string key
   * @tutorial 
   * * store.get(key)
   * @return any
   */
  get: (key) => {
    if (store.validate(key)) {
      return localStorage.getItem(key)
    } else {
      console.error(`la clave "${key}" no está almacenada en el localStorage`)
    }
  },

  /**
   * @description
   * * Almacena en el localStorage un valor
   * * asignado a una de terminada clave
   * @param string key
   * @param any value
   * @tutorial 
   * * store.set(key, value)
   * @return null
   */
  set: (key, value) => {
    if (store.validate(key)) {
      console.warn(`la clave "${key}" tiene el valor "${store.get(key)}", el valor sera actualizado con el valor "${value}"`)
      localStorage.setItem(key, value)
    } else {
      localStorage.setItem(key, value)
    }
  },

  /**
   * @description
   * * Valida si la clave se encuentra almacenada
   * * en el localStorage y la actualiza
   * @param string key
   * @param any value
   * @tutorial 
   * * store.update(key, value)
   * @return null
   */
  update: (key, value) => {
    if (store.validate(key)) {
      if (store.get(key) === value) {
        console.warn(`la clave "${key}" ya cuenta con el valor "${key}", no es necesario actualizar`)
      } else {
        store.set(key, value)
      }
    }
  },

  /**
   * @description 
   * * Valida si la clave se encuentra 
   * * almacenada en el localStorage
   * @param string key
   * @tutorial 
   * * store.validate(key)
   * @return boolean
   */
  validate: (key) => {
    if (localStorage.getItem(key) === null || localStorage.getItem(key) === undefined) {
      return false
    }
    else {
      return true
    }
  },

  /**
   * @description
   * * Almacena de forma masiva datos en el 
   * * localStorage, mediante un objeto json
   * @param Object {}
   * @tutorial 
   * * store.setMassive(
   * *   {
   * *     'foo': 123, 
   * *     'bar':456
   * *   }
   * * )
   * @return void
   */
  setMassive: (obj) => {
    let keys = Object.keys(obj)
    let values = Object.values(obj)

    keys.forEach((k, i) => {
      store.set(k, values[i])
    })
  },

  /**
   * @description
   * * Devuelve de forma masiva elementos 
   * * almacenados en el LocalStorage
   * @param arr []
   * @tutorial
   * * var foo, bar
   * * [foo, bar] = storage.getMassive(
   * *    [
   * *        'foo',
   * *        'bar'
   * *    ]
   * * ) 
   * @return []
  */
  getMassive: (arr) => {
    let result = []
    arr.forEach((a) => {
      result.push(store.get(a))
    })
    return result
  },
  /**
   * @description
   * * Elimina un valor del localStorage 
   * * mediante una cadena que representa 
   * * la clave con la que esta almacenado el valor
   * @param string key
   * @tutorial
   * * store.delete(key)
   * @return void
   */
  delete: (key) => {
    (store.validate(key)) ? localStorage.removeItem(key) : console.warn(`la clave ${key} no ha podido ser eliminada dado que no esta disponible en el localStorage`)
  },
  deleteMassive: (obj) => {
    obj.forEach(key, () => store.delete(key))
  },
  clear: () => localStorage.clear()
}

export default store