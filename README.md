# Opencc

Help you manage Bolus/Basal insulin doses and keep tracking your daily data

## Images

|                          |                           |                              |                       |
| ---                      | ---                       | ---                          | ---                   |
| ![i1](images/1.png "i1") | ![i2](images/2.png "i2")  | ![i3](images/3.png "i3") | ![i4](images/4.png "i4")  |


 
 


## Server

Use [docker](https://docker.io/) to run Opencc on your server.

```bash
git clone https://github.com/brkss/opencc
```

```bash
cd opencc/server
```

```bash
chmod 755 deploy.sh
```

```bash
./deploy.sh
```

## App

Use expo to test / build Opencc


```bash
cd opencc/app
```

```bash
expo run:ios
```

or 

```bash
expo build:ios
```

