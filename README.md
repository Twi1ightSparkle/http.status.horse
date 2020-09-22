![HTTP Horse picture](https://http.status.horse/204)

## About

This is the website that is hosted at [https://http.status.horse](https://http.status.horse).

This version does not need any server side code. The API behavior is provided by a Nginx server config.

The interface is built with React and pre-rendered with react-snap.

## Development

    yarn start

Starts the development server.

    yarn test

Runs the tests.

    yarn build

Creates a build of the project.

## Nginx config
```
        location ~ /(\d+)(\.jpg)? {
                try_files $uri /images/$1.jpg;
        }
```

## Credits

Thanks to @girliemac for creating the amazing http status cats images.

Thanks to @pfdborges for creating the http.cat logo.

Thanks to @nataly-enne for the status 501 image.

## License

MIT
