# Bungalow challenge

##  Requirements:
1. Create a Vue project (we recommend using the Vue CLI ).
2. Write one or more methods to ingest the API endpoint provided (https://stage-fieldstone.bungalow.com/api/v1/listings/properties/?market__slug=seattle).
3. Create an interface to display individual properties from the endpoint data into a
client-side representation of tiles/cards – similar to what you’d find on our website (but if
you have any ideas to make it better, show us).

## Acceptance Criteria:
- Tiles/cards provide relevant details about properties at a glance that would be valuable to
someone looking to find a place to live.
- Git commits should be meaningful and reflect the clarity and context that is required in a
team environment.
-  Provide a README with any additional commentary you want to provide, assumptions

## Libraries utilized:

#### Vue-awesome-swiper

this library is a wrapper for swiper slider (https://swiperjs.com/). I decided to use it for 2 reasons:
- Swiper is a good slider, has good responsiveness, and it can lazy load the images, helping to optimize the main page.
- the wrapper transforms the library into a plug-and-play component, speeding up development.

#### Axios

The main reason behind using axios to improve compability with IE11 while making calls to the API. I've thought about using fetch and just adding the necessary polyfills, but decided to use axios to speed up the development.

#### Tailwind

As tailwind states on its website, it's an utility-first css framework for rapidly build custom designs. Usually when I know that design won't change or the project already has pre-defined classes from a supporting framework (for example bootstrap), I have a tendency to prefer to compose the css with classes instead of writting custom rules. Otherwise, I usually follow them BEM methodology, no matter if it is SASS/LESS/STYLUS or just vanilla CSS.  And the reason why I choose to use tailwind instead of bootstrap, is to avoid overloading the layout with too many divs for its grid system.

## Other code decisions:

I've tried my best to not over-engineer the project, so I've decided to not add routes, neither to add a layout folder (which is something I usually do in a bigger project). Also, I've assumed that all results returned are available in the present date. In my opinion, the next steps in this project would be:

- Implement the virtual scroller to avoid rendering all cards at once: https://github.com/Akryum/vue-virtual-scroller
- Finish implementing the support to IE11, the only thing missing is to add a fallback for the grid rules with the cards. 
- Implement more filters and the details page.

### Commands
```
Project setup:
npm install
Compiles and hot-reloads for development:
npm run serve
Lints and fixes files:
npm run lint
```