---
date: 2019-01-01
isOriginal: true
timeline: true
cover: https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/PILLS%20FOR%20THRILLS.png
tag:
  - 项目
  - 医疗项目
---

# Demo 医疗后台系统文档

## 技术:

##### 前端:

Vue.js+Vue-Router+ElementUI+Axios

##### 后端:

Python+Django+gunicorn+Nginx+MySQL

##### 自动化测试:

Python+Pytest

---

## 数据库可视化:

![CleanShot 2023-05-06 at 12.25.21@2x](https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/CleanShot%202023-05-06%20at%2012.25.21@2x.png)

##### auth_user 表

用户表(Django 自带应用的数据库表)

##### userinfo 表

用户信息表:作为`auth_user` 的子表,用来存储用户额外信息

```mysql
create table common_userinfo
(
    id        bigint auto_increment
        primary key,
    birthdate varchar(50)  null,
    bio       varchar(200) null,
    nickname  varchar(10)  null,
    user_id   int          not null,
    constraint user_id
        unique (user_id),
    constraint common_userinfo_user_id_f817efac_fk_auth_user_id
        foreign key (user_id) references auth_user (id)
);
```

##### customer 表

存储客户信息

```mysql
create table common_customer
(
    id          bigint auto_increment
        primary key,
    name        varchar(30)  not null,
    phoneNumber varchar(11)  not null,
    address     varchar(100) not null
);
```

##### medicine 表

存储药品信息

```mysql
create table common_medicine
(
    id     bigint auto_increment
        primary key,
    name   varchar(50)  not null,
    `desc` varchar(200) not null,
    sn     varchar(50)  not null
);
```

##### order 表

存储订单信息:

1.order 表与 customer 表为 **多对一关系**:一个用户可对应多个订单 ,一个订单只能对应一个用户

2.order 表与 medicine 表为 **多对多关系**:一个药品可对应多个订单,一个订单可对应多个药品,所以需要使用一个纽带表(桥接表)`medicinesorder`

```mysql
create table common_order
(
    id          bigint auto_increment
        primary key,
    name        varchar(200) not null,
    datetime    datetime(6)  not null,
    customer_id bigint       not null,
    constraint common_order_customer_id_8f4f8b04_fk_common_customer_id
        foreign key (customer_id) references common_customer (id)
);

```

##### medicinesorder 表

纽带表,存储订单 id,药品 id,药物数量

```mysql
create table common_medicinesorder
(
    id           bigint auto_increment
        primary key,
    amount       int unsigned not null,
    medicines_id bigint       not null,
    order_id     bigint       not null,
    constraint common_medicinesorde_medicines_id_031c130d_fk_common_me
        foreign key (medicines_id) references common_medicine (id),
    constraint common_medicinesorder_order_id_04a43784_fk_common_order_id
        foreign key (order_id) references common_order (id),
    check (`amount` >= 0)
);
```

---

## 接口文档

##### 说明

**为了书写文档方便,json 中`#`代表注释符号(使用时请删除`#`号,json 中没有注释)**

### 登录相关

#### 登录

##### 请求头

```http
POST  /api/mgr/signin  HTTP/1.1
Content-Type:   application/x-www-form-urlencoded
```

##### 请求参数

- username
- password

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

###### 成功

```json
{ "ret": 0, "msg": "登录成功" }
```

###### 失败

```json
{ "ret": 1, "msg": "请使用管理员账户登录" }
```

```json
{ "ret": 1, "msg": "账户无权限登录" }
```

```json
{ "ret": 1, "msg": "错误的用户名或密码" }
```

---

#### 退出登录

##### _异常情况_

```json
{"ret": 302, "msg": "请先登录"} #未登录情况 status=302重定向
```

```json
{"ret": 1, "msg": "不支持的action"} #action类型错误
```

##### 请求头

```http
GET /api/mgr/signout HTTP/1.1
Cookie: [携带sessionid]
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{ "ret": 0, "msg": "登出成功" }
```

---

### 客户

#### 列出客户

##### 请求头

```http
GET  /api/mgr/customers  HTTP/1.1
```

##### 请求参数

- `action` :值为`list_customer`
- `pagesize` : 每页多少条记录
- `pagenum`:要获取第几页信息

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应内容

```json
{
 "ret": 0,
 "retlist":[ #当页信息列表
   {
     "id":1,
     "address":"上海市嘉定区",
     "name":"李小哲",
     "phonenumber":"12345678911"
   },
   {
     "id":2,
     "address":"上海市静安区",
     "name":"张三",
     "phonenumber":"12345678922"
   }
 ] ,
 "total": 2  #所有用户
}
```

```json
{ "ret": 1, "msg": "请填写pagenum" }
```

```json
{ "ret": 1, "msg": "请填写pagesize" }
```

---

#### 添加客户

##### 请求头

```http
POST  /api/mgr/customers  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action":"add_customer", #固定字段
    "data":{ #参数由前端校验
        "name":"上海市xx医院",
        "phonenumber":"12345678900",
        "address":"上海市xx路xx街"
    }
}
```

##### 响应消息

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{ "ret": 0, "id": 1 }
```

---

#### 修改客户

##### 请求头

```http
PUT  /api/mgr/customers  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action":"modify_customer", #固定字段
    "id": 6, #客户id
    "newdata":{ #要修改的信息
        "name":"上海市xx医院",
        "phonenumber":"13345678888",
        "address":"上海市xx街xx路"
    }
}
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{"ret": 0} #成功
```

```json
{ "ret": 1, "msg": "id:6不存在" }
```

---

#### 删除客户

##### 请求头

```http
DELETE  /api/mgr/customers  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{ "action": "del_customer", "id": 6 }
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{"ret": 0} #成功
```

```json
{"ret": 2, "msg": "订单中引用了这条数据,禁止删除"} #订单列表里有该用户的订单,无法删除
```

```json
{ "ret": 1, "msg": "id:6不存在" }
```

---

### 药品

#### 异常情况

```json
{"ret": 302, "msg": "请先登录"} #未登录 status=302 重定向到登录页
```

```json
{ "ret": 1, "msg": "未传action类型" }
```

```json
{ "ret": 1, "msg": "错误的action类型" }
```

#### 列出药品

##### 请求头

```http
GET  /api/mgr/medicines  HTTP/1.1
```

##### 请求参数

- `action` : `list_medicine` (固定值)
- `pagesize` : 每页获取多少条记录
- `pagenum`:获取第几页记录

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{
  "ret": 0,
  "retlist":[ #当页药品列表
    {
      "id":1,
      "name":"xx药",
      "sn":"213123123",
      "desc":"疗效是...."
    },
        {
      "id":2,
      "name":"xx药2",
      "sn":"2131231333",
      "desc":"疗效是....2"
    }
  ],
  "total": 2 #总共药品数
}
```

```json
{ "ret": 1, "msg": "请填写pagenum" }
```

```json
{ "ret": 1, "msg": "请填写pagesize" }
```

#### 添加药品

##### 请求头

```http
POST  /api/mgr/medicines  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action":"add_medicine", #固定字段
    "data":{
        "name": "xx药",
        "desc": "疗效是...",
        "sn": "1234567788"
    }
}
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{"ret": 0, "id": 1} #成功
```

```json
{ "ret": 1, "msg": "药品名已存在" }
```

```json
{"ret": 1, "msg": "请求体参数中需要填入data"} #未填data status=400
```

#### 修改药品

##### 请求头

```http
PUT  /api/mgr/medicines  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action":"modify_medicine", #固定字段
    "id": 1, #药品id
    "newdata":{
        "name": "xx药",
        "desc": "疗效是....",
        "sn": "123456777"
    }
}
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{ "ret": 0, "msg": "修改成功" }
```

```json
{"ret": 1, "msg": "请传入修改的id值"} #未传id值
```

```json
{"ret": 1, "msg": "请传入newdata"} #未传newdata字段
```

```json
{ "ret": 1, "msg": "无此id的药品" }
```

```json
{"ret": 1, "msg": "请填入相应的修改药品数据"} #name/desc/sn 有一个或多个字段未填写
```

#### 删除药品

##### 请求头

```http
DELETE  /api/mgr/medicines  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action":"del_medicine", #固定字段
    "id": 1 #药品id
}
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{ "ret": 0, "msg": "删除成功" }
```

```json
{"ret": 1, "msg": "请传入删除的id值"} #未传药品id
```

```json
{"ret": 1, "msg": "无此id,无法删除"} #无效药品id
```

```json
{"ret": 2, "msg": "订单中正在使用该商品,无法删除"} #订单列表里有该药品的订单,无法删除
```

### 订单

#### 异常情况

```json
{"ret": 302, "msg": "请先登录"} #status=302
```

```json
{"ret": 1, "msg": "未传action类型"} #status=400
```

```json
{"ret": 1, "msg": "错误的action类型"} #status=400
```

```json
{"ret": 1, "msg": "错误的action类型或错误的请求类型"} #status=400
```

#### 列出订单

##### 请求头

```http
GET  /api/mgr/orders  HTTP/1.1
```

##### 请求参数

- `action` : `list_order` (必填项)
- `pagesize`:一页获取多少条记录
- `pagenum`:获取第几页信息

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{
  "ret": 0,
  "retlist": [ #订单列表
    {
      "id": 1, #订单id
      "name": "xx医院订单", #订单名
      "create_date": "2021-01-22", #订单创建日期
      "customer_name": "李小哲", #订单所属客户
      "customerid": 1,  #客户id
      "medicinelist":[ #订单药品列表
        {
          "id": 2,  #药品id
          "amount": 33,  #药品数量
          "name": "xxx药" #药品名称
              },
        {
          "id": 3,
          "amount": 12,
          "name": "xxx药2"
        },
      ]
    }
  ],
  "total": 2 #订单总数
}
```

```json
{ "ret": 1, "msg": "缺少pagenum或pagesize字段" }
```

#### 添加订单

##### 请求头

```http
POST  /api/mgr/orders  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action":"add_order", #固定字段
    "data":{
        "name":"xxx医院订单", #订单名
        "customerid":1, #客户id
        "medicinelist":[#订单药品列表
            {
              "id":2,#药品id
              "amount":5,#药品数量
              "name":"xxx药"#药品名称
            },
            {
              "id":3,
              "amount":10,
              "name":"xxx药2"
            }
        ]
    }
}
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{"ret": 0, "id": 1} #成功
```

```json
{"ret": 1, "msg": "请传入data或传入正确格式的data"} #未传入data或字段错误
```

```json
{ "ret": 1, "msg": "请传入customerid" }
```

```json
{ "ret": 1, "msg": "请传入订单名称" }
```

```json
{ "ret": 1, "msg": "请传入medicinelist" }
```

#### 修改订单

##### 请求头

```http
PUT  /api/mgr/orders  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action": "modify_order",#固定字段
    "id":12, #修改订单id号
    "data": {
        "name": "修改后订单", #修改订单名
        "customerid": 22, #客户id
        "medicinelist": [ #列表:修改的药品和增加的药品
            {
                "id": 10, #药品id
                "amount": 10,#药品数量
                "name": "xx药"#药品名
            },{
                "id": 3,
                "amount": 15,
                "name": "xx药2"
            }
            ],
				"deletelist":[1,2] #订单里 删除药品列表,列表里每一项为要删除药品的id
    }
}
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{"ret": 0} #成功
```

```json
{"ret": 1, "msg": "请传入正确的id值"} # status=400
```

```json
{"ret": 1, "msg": "请传入正确的data"} # status=400
```

#### 删除订单

##### 请求头

```http
DELETE  /api/mgr/orders  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action":"del_order",#固定字段
    "id": 1 #订单id
}
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{"ret": 0} #成功
```

```json
{ "ret": 1, "msg": "缺少订单id" }
```

### 个人信息

#### 异常情况

```json
{"ret": 302, "msg": "请先登录"} #status=302
```

```json
{ "ret": 1, "msg": "未传action类型" }
```

```json
{ "ret": 1, "msg": "错误的action类型" }
```

#### 获取个人信息

##### 请求头

```http
GET  /api/mgr/profile  HTTP/1.1
```

##### 请求参数

- `action`:`get_my_profile` (必填)

##### 响应头

```json
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

- ###### 用户首次登录

  ```json
  {
    "ret": 0,
   	"profile":
    {
      "nickname": null,  #用户名
      "birthdate": null, #用户出生日期
      "bio": null #用户简介
   }
  }
  ```

- ###### 用户修改过信息

  ```json
  {
    "ret": 0,
    "profile": {
      "nickname": "修改过的用户名",
      "birthdate": "修改过的生日",
      "bio": "修改过的用户简介"
    }
  }
  ```

#### 修改个人信息

##### 请求头

```http
PUT  /api/mgr/profile  HTTP/1.1
Content-Type:   application/json
```

##### 请求体

```json
{
    "action":"modify_my_profile", #固定字段
    "profile":{ #修改信息
        "nickname": "李小哲",
        "birthdate": "1996-01-01",
        "bio": "个人描述"
    }
}
```

##### 响应头

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

##### 响应体

```json
{"ret": 0} #成功
```

```json
{ "ret": 1, "msg": "没有传入profile" }
```
