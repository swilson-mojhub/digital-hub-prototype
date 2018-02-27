# HMPPS Hub Prototype Kit

A prototyping kit built in Jekyll for the HMPPS Hub.

## Build prototype

```
jekyll build
```


## Run the prototype

Run the following commend from the root directory and the prototype will be viewable from [http://localhost:8383/](http://localhost:8383/)

```
docker-compose up
```

## Development

To build the prototype kit assets
```
gulp build
```

To build the stylesheets
```
gulp
```

To set the prototype to watch for changes

```
jekyll build --watch
```
