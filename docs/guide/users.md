# 用户 API

此文档包含三方用户相关的 API。

## 用户注册

<APIEndpoint method="POST" url="/user/register" />


### Body raw json: 

````json
{
    // 用户标识
    "openUuid":"{{openUuid}}",
    // 昵称，可不传
    "nickname":"{{nickname}}"
}
````



### 响应：

````json
{
    "code": "0000",
    "msg": "成功",
    "data": null
}
````

## 用户登录

<APIEndpoint method="POST" url="/user/login" />

### Body raw json: 

````json
{
    // 用户标识
    "openUuid":"{{openUuid}}",
    // 追踪ID,32位，唯一
    "sleuthId":"{{sleuthId}}"
}
````


### 响应：

```json
{
    "code": "0000",
    "msg": "成功",
    "data": {
        "nickname": "wy0618", 
        // 积分
        "coin": 0,
        // 游戏地址 URL 携带的参数，标识用户 
        "token": "d737b1c12cf04c59a4419be7f4eff216",
        "sleuth_id": "a12d948b01b044e8ad37001118a44a6a",
        "openUuid": "a94ad0ee14b64ee1b31c0de52fee1e37",
    }
}
```

## 用户积分同步（上分）

<APIEndpoint method="POST" url="/user/coin/sync" />

### Headers: 

| 参数 | 类型 | 描述 |
| -- | -- | -- |
| Authorization | string | 登录接口响应头里面的 Authorization|

### Body raw json: 

````json
{
    // 积分，数字型
    "coin":"{{coin}}",
    // 登录时传递的 sleuthId
    "sleuthId":"{{sleuthId}}"
}
````

### 响应：

```json
{
    "code": "0000",
    "msg": "成功",
    "data": true
}
```

## 用户积分查询

<APIEndpoint method="GET" url="/user/coin/query" />

### Headers: 

| 参数 | 类型 | 描述 |
| -- | -- | -- |
| Authorization | string | 登录接口响应头里面的 Authorization|

### 响应：

```json
{
    "code": "0000",
    "msg": "成功",
    "data": {
        "coin": 0
    }
}
```

## 游戏在线状态

<APIEndpoint method="GET" url="/user/status" />

### Headers: 

| 参数 | 类型 | 描述 |
| -- | -- | -- |
| Authorization | string | 登录接口响应头里面的 Authorization|

### 响应：

```json
{
    "code": "0000",
    "msg": "成功",
    // false 为不在线，true 为在线
    "data": false
}
```

## 下积分

备用，遇到异常情况调用，用户下线会通过回调下分

<APIEndpoint method="POST" url="/game/transfer/out" />

### Headers: 

| 参数 | 类型 | 描述 |
| -- | -- | -- |
| Authorization | string | 登录接口响应头里面的 Authorization|

### Body raw json: 

````json
{
    // 登陆时的 sleuthId
    "sleuthId":"{{sleuthId}}",
    // 是否下走全部积分，1：下走全部， 0：部分
    "outAll":1,
    // outAll 为 0 时生效，下走指定积分
    "coin":0
}
````

### 响应：

```json
{
    "code": "0000",
    "msg": "成功",
    "data": true
}
```