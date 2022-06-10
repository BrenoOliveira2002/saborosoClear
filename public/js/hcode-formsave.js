HTMLFormElement.prototype.save = function(config) {

    let form = this;

    form.addEventListener('submit', e=> {

      e.preventDefault();
    
      let formData = new FormData(formCreate)
    
      fetch(form.action, {
        method: form.method,
        body: formData
      })
      .then(response => response.json())
      .then(json => {

        if(json.error) {

          if(typeof config.failure === 'function') config.failure(json)
             
        }else {

          if (typeof config.success === 'function') config.success(json.error)

        }

      }).catch(err => {

         if(typeof config.failure === 'function') config.failure(err)

          reject(err)
      })
    
    })


}