# overview

Image Processing Api is an Api that resize image by using an endpoint with argumnet :

- filename
- width
- height

## used in bulding this Api:

- Nodejs
- TypeScript
- npm
- express
- sharp
- jasmine
- prettier
- Eslint
### Scripts
- Build: ```npm run build```
- start server: ```npm run start```
- unit test: ```npm run test```
- format: ```npm run format```
- lint: ```npm run lint```

## Usage:

### instrructions:

http://localhost:3000/

### imge resize endpoint:

http://localhost:3000/api/images

### Query arguments:

- filename : (Avilable image)
  - encenadaport
  - palmtunnel
  - santamonica
  - fjord
  - icelandwaterfall
- width
- height


### Examples
### display an resized image:
http://localhost:3000/api/images?filename=santamonica&width=350&height=500

