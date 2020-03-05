# Adevinta vanilla project
The **Adevinta vanilla project** is a **Javascript app** to search movies. The app consists in a home, where the user finds an input to search the movie he choose. 

After the search there are two possibilities, the first one is that the app shows a list of movies related with the search. The second one is if the API don't find any result, it shows a no results page.
In case that the app finds results, the user has the possibility to sort them by title.

Every result that the app shows is clickable, and redirects the user to imdb page of the movie selected. 

# Components

Below is shown the folders and components structure of the app.

![Components](./assets/components-structure.png)

The app is split in 3 main parts. 
- Assets: where I saved the images and gifs used.
- js: where I saved the components and the logic.
- styles: where I saved all scss files.

# Details

## Optimization method

- **Get details method:**
![getDetails](./assets/getDetails-image.png)
					The method getDetails is responsible to make call some methods in
                     order to call the API, save data in cache and get the data. First
                     of all, the method call the apiService with Axios library.  The
                     API returns an array of objects. In each object there is an
                     imdbID which I use to identify each item and check if I have it
                     in cache. If I have it, I exclude it from the next apiService
                     call, if I don't, I include it.                     
                     Then the app call the apiService to get more details of every
                     item, and save them in cache. After that, it gets the data saved
                     in cache and sort it by title.
                     
- Demo API calls:
![getDetailsVideo](./assets/getDetails-video.mov)

## Test

The test are done with Jest.

![test](./assets/test-image.png)

## Error API feedback

The app gives feedback to the user in case that the API has any problem.

![error](./assets/error-image.png)

## No results

The app shows a no results page if then API doesn't return data for the user search.

![no-results](./assets/no-results-image.png)
