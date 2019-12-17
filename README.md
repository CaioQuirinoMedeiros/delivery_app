# Pizza Delivery

<img src="/screenshots/login.jpg" width="160"> <img src="/screenshots/register.jpg" width="160"> <img src="/screenshots/categories.jpg" width="160"> <img src="/screenshots/products.jpg" width="160"> <img src="/screenshots/sizes.jpg" width="160"> <img src="/screenshots/cart.jpg" width="160"> <img src="/screenshots/order.jpg" width="160"> <img src="/screenshots/profile.jpg" width="160"> <img src="/screenshots/order-detail.jpg" width="160">

## About

This project is part of the final challenge of [Rocketseat bootcamp course](https://rocketseat.com.br/bootcamp). It consists in a delivery application of a fantasy pizza parlor.

## Integration

This app integrates with an [API](https://github.com/CaioQuirinoMedeiros/delivery_api) built with NodeJS and it's intended for customers. There's a [web application](https://github.com/CaioQuirinoMedeiros/delivery_web) designed to manage the application

## :arrow_down: Installing

**Cloning the repo**

```shell
git clone https://github.com/CaioQuirinoMedeiros/delivery_app.git

cd delivery_app
```

**Installing dependencies**

```shell
yarn install
```

## :satellite: Connecting with the server API

1. Follow the instructions on [delivery-api](https://github.com/CaioQuirinoMedeiros/delivery_api) to have the server up and running
2. Create a _.env_ file and set a variable `REACT_APP_API_URL` with the value of your server url

- It should looks like this: `CREATE_APP_API_URL=http://127.0.0.1:3333`

3. Run `adb reverse tcp:3333 tcp:3333` so the app can communicate with the backend

## :runner: Running

Make sure you have [react-native environment](https://facebook.github.io/react-native/docs/getting-started) properly configured

- Android
  ```shell
  react-native run-android
  ```
- iOS
  ```shell
  react-native run-ios
  ```

**run metro-bundler whenever needed**

```shell
react-native start
```
