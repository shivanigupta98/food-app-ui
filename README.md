# config-driven UI

## Cors ISSUE - fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://wikipedia.org')}`)
                    .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                    .then(data => console.log(data.contents));


##  https://cors-anywhere.herokuapp.com/corsdemo   
## client side routing                                

## https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9175337&lng=77.65045719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING