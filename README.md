# config-driven UI

## Cors ISSUE - fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://wikipedia.org')}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => console.log(data.contents));


##  https://cors-anywhere.herokuapp.com/corsdemo                                   

