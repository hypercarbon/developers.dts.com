# 游戏

此文档包含游戏相关操作。

游戏流程有以下几种：

- 用户登录、上分 -> sleuthId 过期 -> 游戏结束，下分回调
- 用户登录、上分 -> 游戏登录 -> 进入游戏回调 -> 游戏结束，下分回调

只要有上分的行为，必定有结束后下分回调

## EndPoint

具体域名对接时联系第三方获取


## sleuthId 有效期 

用户登录后未使用的 sleuthId 应该有有效期，超过有效期 sleuthId 失效，不能在通过该 sleuthId 登录游戏。
失效后需要通知第三方

<APIEndpoint method="POST" url="/open/game/expired/events"/>

### Body raw json: 

````json
{
    "openUuid": "{{openUuid}}",
    // 登录时的 sleuthId
    "sleuthId": "{{sleuthId}}",
}
````

## 进入游戏回调

用户使用 sleuthId 成功进入游戏后（游戏通过Cocos登录成功）需要通知第三方

<APIEndpoint method="POST" url="/open/game/online/events"/>

### Body raw json: 

````json
{
    "openUuid": "{{openUuid}}",
    // 登录时的 sleuthId
    "sleuthId": "{{sleuthId}}",
}
````

## 游戏结束，下分回调

用户结束游戏后（游戏结束或关闭后回调事件），需要为用户下分并通知第三方

<APIEndpoint method="POST" url="/open/game/callback/events"/>

### Body raw json: 

````json
{
    "openUuid": "{{openUuid}}",
    // 登录时的 sleuthId
    "sleuthId": "{{sleuthId}}",
    // 进入游戏的时间戳
    "beginTime":{{beginTime}},
    // 结束游戏的时间戳
    "endTime":{{endTime}},
    // 进入游戏的 coin
    "scoreBefore":{{scoreBefore}},
    // 结束游戏的 coin
    "scoreAfter":{{scoreAfter}}
}
````