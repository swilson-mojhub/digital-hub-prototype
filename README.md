# HMPPS Hub Prototype Kit

A prototyping kit built in Jekyll for the HMPPS Hub.

## Install the dependencies to build Prototype

```
make Build
```

### The build steps are

```
bundle install
```
```
npm install -g gulp
```
```
npm install
```
```
gulp copyGovAsset
```
```
gulp build
```

## Copy gov kit assets

```
gulp copyGovAssets
```

## Build prototype

```
gulp build
```

## Serve prototype locally

```
gulp server
```

The prototype will be viewable from [http://localhost:4000/](http://localhost:4000/)
