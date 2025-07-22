document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://foodish-api.com/api/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}