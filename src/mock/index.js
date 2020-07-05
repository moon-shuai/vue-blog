/* eslint-disable */
import Mock from './mock-min';

// 登录
Mock.mock(new RegExp('/login'),'post', () =>{
    return Mock.mock({
      'data': {
          'access_token':Mock.Random.guid(),
          'username':'c-chens'
      },
      'code': 0,
      'msg': '请求成功'
  })
});

//获取用户信息
Mock.mock(new RegExp('/user/current'),{
    'data': {
      "userCode":"test",
      "username":"admins",
      "lstSysAuthority":[
          {
              "authorityCode":"INDEX",
              "icon":"home",
              "id":1,
              "name":"首页",
              "path":"/index",
              "children":null,
              'closable': false,
          },
          {
              "authorityCode":"ADMINMANAGE",
              "icon":"crown",
              "id":2,
              "name":"会所管理",
              "path":"/chamberManage",
              "children":null
          },
          {
            "authorityCode":"ORDERMANAGE",
            "icon":"audit",
            "id":3,
            "name":"订单管理",
            "path":"/orderManage",
            "children": [
              {
                "icon":"project",
                "id":31,
                "name":"订单列表",
                "path":"/orderList"
              },
              {
                "icon":"project",
                "id":32,
                "name":"订单设置",
                "path":"/orderSetting"
              }
            ]
          },
          {
            "authorityCode":"NOTICEMANAGE",
            "icon":"read",
            "id":4,
            "name":"公告管理",
            "path":"/noticeManage",
            "children": [
              {
                "icon":"project",
                "id":33,
                "name":"轮播图管理",
                "path":"/banner"
              },
              {
                "icon":"project",
                "id":34,
                "name":"物业公告管理",
                "path":"/propertyNotice"
              }
            ]
          },
          {
            "authorityCode":"NEWSPAPERMANAGE",
            "icon":"alert",
            "id":5,
            "name":"报事管理",
            "path":"/newspaperManage",
            "children": null
          },
          {
            "authorityCode":"USERMANAGE",
            "icon":"user",
            "id":2,
            "name":"用户管理",
            "path":"/userManage",
            "children":null
          }, 
          {
            "authorityCode":"SYSTEMMANAGE",
            "icon":"setting",
            "id":9,
            "name":"系统管理",
            "path":"/systemManage",
            "children": [
              {
                "authorityCode":"SYSTEMSETING",
                "icon":"user",
                "id":7,
                "name":"系统设置",
                "path":"/systemSetting",
                "children":null
              }, 
              {
                "authorityCode":"EMPLOYEEMANAGE",
                "icon":"crown",
                "id":8,
                "name":"员工管理",
                "path":"/employeeManage",
                "children":null
              },
              {
                "authorityCode":"ROLEMANAGE",
                "icon":"crown",
                "id":9,
                "name":"角色管理",
                "path":"/roleManage",
                "children":null
              }
            ]
          },
          {
            "authorityCode":"MOCHAMANAGE",
            "icon":"tool",
            "id":9,
            "name":"运维管理",
            "path":"/mochaManage",
            "children": [
              {
                "icon":"project",
                "id":36,
                "name":"数据字典",
                "path":"/dataDictionary"
              },
              {
                "icon":"project",
                "id":35,
                "name":"支付管理",
                "path":"/payManage"
              },
              {
                "icon":"download",
                "id":6,
                "name":"用户手册",
                "path":"/userManual",
                "children":null
              },
              {
                "icon":"download",
                "id":6,
                "name":"日志审计",
                "path":"/logAudit",
                "children":null
              }
            ]
          }
      ],
      "sysButtonAuthority": [
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1101,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "查看",
            "name": "查看",
            "parentId": 1100,
            "path": "",
            "permission": "biz_clubproduct_view",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1102,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "新增会所",
            "name": "新增会所",
            "parentId": 1100,
            "path": "",
            "permission": "biz_clubproduct_add",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1103,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "编辑会所",
            "name": "编辑会所",
            "parentId": 1100,
            "path": "",
            "permission": "biz_clubproduct_edit",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1202,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "查看",
            "name": "查看",
            "parentId": 1201,
            "path": "",
            "permission": "biz_cluborder_view",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1203,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "取消订单",
            "name": "取消订单",
            "parentId": 1201,
            "path": "",
            "permission": "biz_cluborder_cancel",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1302,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "查看",
            "name": "查看",
            "parentId": 1301,
            "path": "",
            "permission": "biz_banner_view",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1303,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "新增",
            "name": "新增",
            "parentId": 1301,
            "path": "",
            "permission": "biz_banner_add",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1304,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "编辑",
            "name": "编辑",
            "parentId": 1301,
            "path": "",
            "permission": "biz_banner_edit",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1401,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "查看",
            "name": "查看",
            "parentId": 1400,
            "path": "",
            "permission": "biz_workorder_view",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1402,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "确认解决",
            "name": "确认解决",
            "parentId": 1400,
            "path": "",
            "permission": "biz_workorder_confirm_solution",
            "sort": 0,
            "spread": false,
            "type": "1"
        },
        {
            "children": [],
            "component": "",
            "icon": "",
            "id": 1403,
            "isAuthority": false,
            "keepAlive": "0",
            "label": "确认受理",
            "name": "确认受理",
            "parentId": 1400,
            "path": "",
            "permission": "biz_workorder_confirm_acceptance",
            "sort": 0,
            "spread": false,
            "type": "1"
        }
    ]
    },
    'code': 0,
    'msg': '请求成功'
});

// 获取角色树
Mock.mock(new RegExp('/auth/getauthbyrole'),{
  "data":{
      "allTreeAuth":[
          {
              "authorityCode":"INDEX",
              "authorityDesc":"首页",
              "icon":"home",
              "id":1,
              "name":"首页",
              "authorityStatus":"1",
              "authorityType":"0",
              "path":"/index",
              "createTime":1560393214000,
              "creator":1,
              "lstChild":null,
              "lstIncludeId":null,
              "lstNotIncludeId":null,
              "parentId":0,
              "seqNum":1,
              "updateTime":null,
              "updator":null
          },
          {
              "authorityCode":"SYS",
              "authorityDesc":"系统管理",
              "icon":"setting",
              "id":2,
              "name":"系统管理",
              "authorityStatus":"1",
              "authorityType":"0",
              "path":"/systemManage",
              "createTime":1560393214000,
              "creator":1,
              "lstChild":[
                  {
                      "authorityCode":"SYS_USER",
                      "authorityDesc":"用户管理",
                      "icon":"user-add",
                      "id":3,
                      "name":"用户管理",
                      "authorityStatus":"1",
                      "authorityType":"1",
                      "path":"/userManage",
                      "createTime":1560393214000,
                      "creator":1,
                      "lstChild":null,
                      "lstIncludeId":null,
                      "lstNotIncludeId":null,
                      "parentId":2,
                      "seqNum":1,
                      "updateTime":null,
                      "updator":null
                  },
                  {
                      "authorityCode":"SYS_ROLE",
                      "authorityDesc":"角色管理",
                      "icon":"file-protect",
                      "id":4,
                      "name":"角色管理",
                      "authorityStatus":"1",
                      "authorityType":"1",
                      "path":"/roleManage",
                      "createTime":1560393215000,
                      "creator":1,
                      "lstChild":null,
                      "lstIncludeId":null,
                      "lstNotIncludeId":null,
                      "parentId":2,
                      "seqNum":2,
                      "updateTime":null,
                      "updator":null
                  },
                  {
                      "authorityCode":"SYS_DICT",
                      "authorityDesc":"数据字典",
                      "icon":"reconciliation",
                      "id":5,
                      "name":"数据字典",
                      "authorityStatus":"1",
                      "authorityType":"1",
                      "path":"/dict",
                      "createTime":1560393215000,
                      "creator":1,
                      "lstChild":null,
                      "lstIncludeId":null,
                      "lstNotIncludeId":null,
                      "parentId":2,
                      "seqNum":3,
                      "updateTime":null,
                      "updator":null
                  },
                  {
                    "authorityCode":"SYS_TEST",
                    "authorityDesc":"测试数据",
                    "icon":"reconciliation",
                    "id":6,
                    "name":"测试数据",
                    "authorityStatus":"1",
                    "authorityType":"1",
                    "path":"/test",
                    "createTime":1560393215001,
                    "creator":1,
                    "lstChild":null,
                    "lstIncludeId":null,
                    "lstNotIncludeId":null,
                    "parentId":2,
                    "seqNum":3,
                    "updateTime":null,
                    "updator":null
                  }
              ],
              "lstIncludeId":null,
              "lstNotIncludeId":null,
              "parentId":0,
              "seqNum":3,
              "updateTime":null,
              "updator":null
          }
      ]
  },
  "code":0,
  "msg":"请求成功"
});

//获取角色信息
Mock.mock(new RegExp('/role/queryUserRoleList'), {
  "data": {
    "current": 1,
    "pages": 1,
    "records":[
      {
        "createTime": "2019-05-10",
        "creator": 1,
        "lstNotIncludeId": null,
        "roleDesc": "1",
        "roleId": 1,
        "roleName": "管理员",
        "roleStatus": "1",
        "updateTime": "2019-09-16",
        "updator": 43
      }
    ],
    "size": 10,
    "total": 5
  },
  "code": 0,
  "msg": "请求成功"
});

//字典表
Mock.mock(new RegExp('/dic/dicList'),{
  "data": {
    "current": 1,
    "pages": 1,
    "records": [
      {
        "alertLevel": 2,
        "createTime": "2019-11-15 20:07:26",
        "creator": 1,
        "devAddr": "上梅林",
        "devCode": "1145",
        "devId": 32,
        "devIp": "0.0.0.0",
        "devLetitude": null,
        "devLongitude": null,
        "devName": "清湖",
        "devPro": "上梅林",
        "devRemark": "上梅林",
        "devSN": null,
        "devStatus": 1,
        "devType": "分体式",
        "isDeleted": 1,
        "queryDate": null,
        "seriousValue": null,
        "updateTime": "2019-11-15 20:07:26",
        "updator": 1,
        "waterValue": null
      },
      {
        "alertLevel": 2,
        "createTime": "2019-11-13 11:51:44",
        "creator": 1,
        "devAddr": "深圳市南山区",
        "devCode": "1154",
        "devId": 27,
        "devIp": "1.2.3.4",
        "devLetitude": 0,
        "devLongitude": 0,
        "devName": "龙华",
        "devPro": "中国制造",
        "devRemark": "中国制造",
        "devSN": "string",
        "devStatus": 1,
        "devType": "0004",
        "isDeleted": 1,
        "queryDate": null,
        "seriousValue": null,
        "updateTime": "2019-11-15 20:06:49",
        "updator": 1,
        "waterValue": 16
      },
      {
        "alertLevel": 0,
        "createTime": "2019-11-13 11:06:57",
        "creator": 1,
        "devAddr": "深圳市南山区",
        "devCode": "1150",
        "devId": 22,
        "devIp": "0.1.2.3",
        "devLetitude": 40.07,
        "devLongitude": 116.35,
        "devName": "南山",
        "devPro": "中国制造",
        "devRemark": "深圳市南山区",
        "devSN": null,
        "devStatus": 1,
        "devType": "标准式",
        "isDeleted": 1,
        "queryDate": null,
        "seriousValue": null,
        "updateTime": "2019-11-08 15:08:08",
        "updator": 1,
        "waterValue": 16
      },
      {
        "alertLevel": 1,
        "createTime": "2019-11-10 10:37:06",
        "creator": 4,
        "devAddr": "深圳市龙华区",
        "devCode": "1154",
        "devId": 25,
        "devIp": "4.3.2.1",
        "devLetitude": 40.15,
        "devLongitude": 116.36,
        "devName": "龙华",
        "devPro": "America",
        "devRemark": "Make in America",
        "devSN": null,
        "devStatus": 1,
        "devType": "0002",
        "isDeleted": 1,
        "queryDate": null,
        "seriousValue": null,
        "updateTime": "2019-12-09 11:39:09",
        "updator": 4,
        "waterValue": 14
      },
      {
        "alertLevel": 2,
        "createTime": null,
        "creator": 1,
        "devAddr": "ceshi123",
        "devCode": "124",
        "devId": 26,
        "devIp": "10.2.3.5",
        "devLetitude": 40.02,
        "devLongitude": 116.5,
        "devName": "ceshi123",
        "devPro": "ceshi123",
        "devRemark": "ceshi123",
        "devSN": null,
        "devStatus": 1,
        "devType": "标准式",
        "isDeleted": 1,
        "queryDate": null,
        "seriousValue": null,
        "updateTime": "2019-11-11 15:08:30",
        "updator": 1,
        "waterValue": 15
      }
    ],
    "size": 10,
    "total": 5
  },
  "code": 0,
  "msg": "请求成功"
});

//用户管理
Mock.mock(new RegExp('/user/userList'),{
  "data": {
    "current": 1,
    "pages": 23,
    "records": [
      {
        "createTime": "2019-12-05",
        "creator": 1,
        "groupName": "编辑",
        "phoneNumber": "13025637896",
        "remark": "神奇",
        "updateTime": null,
        "updator": null,
        "userCode": "admin123",
        "userGroupId": 54,
        "userId": 241,
        "userName": "admin123",
        "userPassword": "0z15XSXkQYk1oCks7o1gPMM/xvGgH/pke7imA0H32ji=",
        "userStatus": "1"
      },
      {
        "createTime": "2019-12-02",
        "creator": 1,
        "groupName": "提供给海康测试不能动",
        "phoneNumber": "13424287663",
        "remark": null,
        "updateTime": null,
        "updator": null,
        "userCode": "videotest",
        "userGroupId": 61,
        "userId": 240,
        "userName": "videotest",
        "userPassword": "0z15XSXkQYk1oCks7o1gPMM/xvGgH/pke7imA0H32ji=",
        "userStatus": "1"
      },
      {
        "createTime": "2019-11-29",
        "creator": 235,
        "groupName": "555",
        "phoneNumber": "15613334444",
        "remark": null,
        "updateTime": null,
        "updator": null,
        "userCode": "new",
        "userGroupId": 60,
        "userId": 239,
        "userName": "new",
        "userPassword": "evbWd9Z514x6FaF9E2RX2Kv+1YSfNDO28dgP2/Y8Nd3=",
        "userStatus": "1"
      },
      {
        "createTime": "2019-11-29",
        "creator": 232,
        "groupName": "系统管理员组",
        "phoneNumber": "18745677665",
        "remark": null,
        "updateTime": null,
        "updator": null,
        "userCode": "admin",
        "userGroupId": 1,
        "userId": 238,
        "userName": "admin1",
        "userPassword": "0z15XSXkQYk1oCks7o1gPMM/xvGgH/pke7imA0H32ji=",
        "userStatus": "1"
      },
      {
        "createTime": "2019-11-29",
        "creator": 1,
        "groupName": "jeff",
        "phoneNumber": "15814488227",
        "remark": null,
        "updateTime": null,
        "updator": null,
        "userCode": "cindy",
        "userGroupId": 57,
        "userId": 237,
        "userName": "cindy123",
        "userPassword": "0z15XSXkQYk1oCks7o1gPMM/xvGgH/pke7imA0H32ji=",
        "userStatus": "1"
      },
      {
        "createTime": "2019-11-25",
        "creator": 1,
        "groupName": "系统管理员组",
        "phoneNumber": "17688559191",
        "remark": "1",
        "updateTime": null,
        "updator": null,
        "userCode": "lk",
        "userGroupId": 1,
        "userId": 236,
        "userName": "lk",
        "userPassword": "1U1O3/YQ/og41Ubo/RE/vQ5JFoG9lNRjMbVsT25hwQI=",
        "userStatus": "1"
      },
      {
        "createTime": "2019-11-22",
        "creator": 1,
        "groupName": "eee",
        "phoneNumber": "13424281441",
        "remark": "1",
        "updateTime": null,
        "updator": null,
        "userCode": "jeff",
        "userGroupId": 59,
        "userId": 235,
        "userName": "jeff",
        "userPassword": "0z15XSXkQYk1oCks7o1gPMM/xvGgH/pke7imA0H32ji=",
        "userStatus": "1"
      },
      {
        "createTime": "2019-11-21",
        "creator": 1,
        "groupName": "系统管理员组",
        "phoneNumber": "13424287872",
        "remark": "111",
        "updateTime": null,
        "updator": null,
        "userCode": "chent88",
        "userGroupId": 1,
        "userId": 234,
        "userName": "chent88",
        "userPassword": "0z15XSXkQYk1oCks7o1gPMM/xvGgH/pke7imA0H32ji=",
        "userStatus": "0"
      },
      {
        "createTime": "2019-11-21",
        "creator": 1,
        "groupName": "系统管理员组",
        "phoneNumber": "13424287992",
        "remark": "string",
        "updateTime": null,
        "updator": null,
        "userCode": "chent77",
        "userGroupId": 1,
        "userId": 233,
        "userName": "chent77",
        "userPassword": "0z15XSXkQYk1oCks7o1gPMM/xvGgH/pke7imA0H32ji=",
        "userStatus": "1"
      },
      {
        "createTime": "2019-11-21",
        "creator": 21,
        "groupName": "用户组管理",
        "phoneNumber": "15814488223",
        "remark": null,
        "updateTime": null,
        "updator": null,
        "userCode": "cindy123",
        "userGroupId": 55,
        "userId": 232,
        "userName": "cindy",
        "userPassword": "0z15XSXkQYk1oCks7o1gPMM/xvGgH/pke7imA0H32ji=",
        "userStatus": "1"
      }
    ],
    "size": 10,
    "total": 222
  },
  "code": 0,
  "msg": "请求成功"
});

//测试模块数据
Mock.mock(new RegExp('/test/list'),{
    "data": {
        "current": 1,
        "pages": 4,
        "records": [
            {
                "area": 14,
                "createTime": "2019-12-02",
                "creator": 1,
                "deleted": 1,
                "length": 1234,
                "remark": "1234",
                "updateTime": null,
                "updator": null,
                "waterId": 75,
                "waterName": "测试12324",
                "waterType": 1
            },
            {
                "area": 16,
                "createTime": "2019-12-02",
                "creator": 1,
                "deleted": 1,
                "length": 1234,
                "remark": "1234",
                "updateTime": null,
                "updator": null,
                "waterId": 74,
                "waterName": "测试12323",
                "waterType": 1
            }
        ],
        "size": 10,
        "total": 2
    },
    "code": 0,
    "msg": "请求成功"
});


// 订单列表
Mock.mock(new RegExp('/orderList/page'),'get', () => {
  return Mock.mock({
      'data': {
          'total':  20,
          'size':  10,
          'current':  1,
          'records': (()=>{
              let t=[];
              for (let i = 0; i < 20; i++) {
                  t.push(Mock.mock({
                      'id': ()=>Mock.Random.id(),
                      'orderNumber': ()=>Mock.mock('@id'),
                      'name': ()=>Mock.Random.cname(),
                      'telphone': ()=>Mock.mock(/^1[385][1-9]\d{8}/),
                      'tradeName': ()=>Mock.mock('@ctitle'),
                      'tradeNumber': ()=>Mock.Random.integer(1,60),
                      'orderAmount': ()=>Mock.mock('@float(60, 100)'),
                      'status': ()=>Mock.Random.pick([1,2,3,4,5]),
                      'updateTime': ()=>Mock.Random.datetime()
                  }))
              }
              return t
          })()
      },
      'code': 0,
      'msg': '请求成功'
  })
});
// 订单详情--会所预订信息
Mock.mock(new RegExp('/cluborder/clubInfor'),'get', () => {
  return Mock.mock({
      'data': {
          'total':  1,
          'size':  10,
          'current':  1,
          'records': (()=>{
              let t=[];
              for (let i = 0; i < 1; i++) {
                  t.push(Mock.mock({
                      'id': ()=>Mock.Random.id(),
                      'number': ()=>Mock.mock('@id'),
                      'name': ()=>Mock.mock('@ctitle'),
                      'images': ()=>Mock.Random.image('85x65', '#4A7BF7'),
                      'price': ()=>Mock.mock('@float(60, 100)'),
                      'project': ()=>Mock.Random.pick(['金域蓝湾1','金域蓝湾2','金域蓝湾3','金域蓝湾4']),
                      'updateTime': ()=>Mock.Random.datetime()
                  }))
              }
              return t
          })()
      },
      'code': 0,
      'msg': '请求成功'
  })
});
// 轮播图管理
Mock.mock(new RegExp('/notice/list'),'get', () => {
  return Mock.mock({
      'data': {
          'total':  10,
          'size':  10,
          'current':  1,
          'records': (()=>{
              let t=[];
              for (let i = 0; i < 10; i++) {
                  t.push(Mock.mock({
                      'id': ()=>Mock.Random.id(),
                      'code': ()=>Mock.mock('@id'),
                      'title': ()=>Mock.mock('@ctitle'),
                      'imgUrl': ()=>Mock.Random.image('85x65', '#4A7BF7'),
                      'updatePeople': ()=>Mock.Random.cname(),
                      'updateTime': ()=>Mock.Random.datetime()
                  }))
              }
              return t
          })()
      },
      'code': 0,
      'msg': '请求成功'
  })
});
// 报事列表
Mock.mock(new RegExp('/newspaper/page'),'get', () => {
  return Mock.mock({
      'data': {
          'total':  20,
          'size':  10,
          'current':  1,
          'records': (()=>{
              let t=[];
              for (let i = 0; i < 20; i++) {
                  t.push(Mock.mock({
                      'id': ()=>Mock.Random.id(),
                      'code': ()=>Mock.mock('@id'),
                      'username': ()=>Mock.Random.cname(),
                      'phone': ()=>Mock.mock(/^1[385][1-9]\d{8}/),
                      'projectName': ()=>Mock.mock('@ctitle'),
                      'kindType': ()=>Mock.Random.pick(['公区报事']),
                      'position': ()=>Mock.Random.integer(1,60),
                      'remark': ()=>Mock.mock('@float(60, 100)'),
                      'status': ()=>Mock.Random.pick([1,2,3]),
                      'updateTime': ()=>Mock.Random.datetime()
                  }))
              }
              return t
          })()
      },
      'code': 0,
      'msg': '请求成功'
  })
});
//用户管理
Mock.mock(new RegExp('/auth/getauthbyrole'),{
  "data": {
    "code": 0,
    "msg": "请求成功",
    "hasAuth":[1,7,11,10,6,12,13,15,16,14,52,22,23,3,4,17,24,53,18,25,26,19,27,28,55],
    "allTreeAuth": [
      {
          "authorityCode":"INDEX",
          "authorityDesc":"首页",
          "icon":"home",
          "id":1,
          "name":"首页",
          "authorityStatus":"1",
          "authorityType":"0",
          "path":"/index",
          "createTime":1557417600000,
          "creator":1,
          "lstChild":null,
          "lstIncludeId":null,
          "lstNotIncludeId":null,
          "parentId":0,
          "seqNum":1,
          "updateTime":null,
          "updator":null
      },
      {
        "authorityCode":"SYS_ROLE",
        "authorityDesc":"会所管理",
        "icon":"file-protect",
        "id":90,
        "name":"会所管理",
        "authorityStatus":"1",
        "authorityType":"1",
        "path":"/roleManage",
        "createTime":1557417600000,
        "creator":1,
        "lstChild":[
            {
                "authorityCode":"SYS_ROLE_ADD",
                "authorityDesc":"新增",
                "icon":null,
                "id":1,
                "name":"新增",
                "authorityStatus":"1",
                "authorityType":"2",
                "path":"",
                "createTime":1557417600000,
                "creator":1,
                "lstChild":null,
                "lstIncludeId":null,
                "lstNotIncludeId":null,
                "parentId":90,
                "seqNum":1,
                "updateTime":null,
                "updator":null
            },
            {
                "authorityCode":"SYS_ROLE_DETAIL",
                "authorityDesc":"查看详情",
                "icon":null,
                "id":2,
                "name":"查看详情",
                "authorityStatus":"1",
                "authorityType":"2",
                "path":"",
                "createTime":1557417600000,
                "creator":1,
                "lstChild":null,
                "lstIncludeId":null,
                "lstNotIncludeId":null,
                "parentId":90,
                "seqNum":2,
                "updateTime":null,
                "updator":null
            },
            {
                "authorityCode":"SYS_ROLE_EDIT",
                "authorityDesc":"编辑",
                "icon":null,
                "id":3,
                "name":"编辑",
                "authorityStatus":"1",
                "authorityType":"2",
                "path":"",
                "createTime":1557417600000,
                "creator":1,
                "lstChild":null,
                "lstIncludeId":null,
                "lstNotIncludeId":null,
                "parentId":90,
                "seqNum":3,
                "updateTime":null,
                "updator":null
            },
            {
                "authorityCode":"SYS_ROLE_STOP",
                "authorityDesc":"停用",
                "icon":null,
                "id":4,
                "name":"停用",
                "authorityStatus":"1",
                "authorityType":"2",
                "path":"",
                "createTime":1557417600000,
                "creator":1,
                "lstChild":null,
                "lstIncludeId":null,
                "lstNotIncludeId":null,
                "parentId":90,
                "seqNum":4,
                "updateTime":null,
                "updator":null
            },
            {
                "authorityCode":"SYS_ROLE_DEL",
                "authorityDesc":"删除",
                "icon":null,
                "id":5,
                "name":"删除",
                "authorityStatus":"1",
                "authorityType":"2",
                "path":"",
                "createTime":1557417600000,
                "creator":1,
                "lstChild":null,
                "lstIncludeId":null,
                "lstNotIncludeId":null,
                "parentId":90,
                "seqNum":5,
                "updateTime":null,
                "updator":null
            },
            {
                "authorityCode":"SYS_ROLE_QUERY",
                "authorityDesc":"查询",
                "icon":null,
                "id":6,
                "name":"查询",
                "authorityStatus":"1",
                "authorityType":"2",
                "path":"",
                "createTime":1557417600000,
                "creator":1,
                "lstChild":null,
                "lstIncludeId":null,
                "lstNotIncludeId":null,
                "parentId":90,
                "seqNum":6,
                "updateTime":null,
                "updator":null
            }
        ],
        "lstIncludeId":null,
        "lstNotIncludeId":null,
        "parentId":29,
        "seqNum":2,
        "updateTime":null,
        "updator":null
    },
    {
      "authorityCode":"SYS_ROLE",
        "authorityDesc":"员工管理",
        "icon":"file-protect",
        "id":6,
        "name":"员工管理",
        "authorityStatus":"1",
        "authorityType":"1",
        "path":"/roleManage",
        "createTime":1557417600000,
        "creator":1,
        "lstIncludeId":null,
        "lstNotIncludeId":null,
        "parentId":29,
        "seqNum":2,
        "updateTime":null,
        "updator":null
  },
      {
          "authorityCode":"SYS",
          "authorityDesc":"系统管理",
          "icon":"setting",
          "id":29,
          "name":"系统管理",
          "authorityStatus":"1",
          "authorityType":"0",
          "path":"/systemManage",
          "createTime":1557417600000,
          "creator":1,
          "lstChild":[
              {
                  "authorityCode":"SYS_USER",
                  "authorityDesc":"用户管理",
                  "icon":"user-add",
                  "id":30,
                  "name":"用户管理",
                  "authorityStatus":"1",
                  "authorityType":"1",
                  "path":"/userManage",
                  "createTime":1557417600000,
                  "creator":1,
                  "lstChild":[
                      {
                          "authorityCode":"SYS_USER_QUERY",
                          "authorityDesc":"查询",
                          "icon":null,
                          "id":31,
                          "name":"查询",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":30,
                          "seqNum":1,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_USER_ADD",
                          "authorityDesc":"新增",
                          "icon":null,
                          "id":32,
                          "name":"新增",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":30,
                          "seqNum":2,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_USER_EDIT",
                          "authorityDesc":"编辑",
                          "icon":null,
                          "id":33,
                          "name":"编辑",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":30,
                          "seqNum":3,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_USER_STOP",
                          "authorityDesc":"停用",
                          "icon":null,
                          "id":34,
                          "name":"停用",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":30,
                          "seqNum":4,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_USER_RESETPASS",
                          "authorityDesc":"重置密码",
                          "icon":null,
                          "id":35,
                          "name":"重置密码",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":30,
                          "seqNum":5,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_USER_DEL",
                          "authorityDesc":"删除",
                          "icon":null,
                          "id":36,
                          "name":"删除",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":30,
                          "seqNum":6,
                          "updateTime":null,
                          "updator":null
                      }
                  ],
                  "lstIncludeId":null,
                  "lstNotIncludeId":null,
                  "parentId":29,
                  "seqNum":1,
                  "updateTime":null,
                  "updator":null
              },
              {
                  "authorityCode":"SYS_ROLE",
                  "authorityDesc":"角色管理",
                  "icon":"file-protect",
                  "id":37,
                  "name":"角色管理",
                  "authorityStatus":"1",
                  "authorityType":"1",
                  "path":"/roleManage",
                  "createTime":1557417600000,
                  "creator":1,
                  "lstChild":[
                      {
                          "authorityCode":"SYS_ROLE_ADD",
                          "authorityDesc":"新增",
                          "icon":null,
                          "id":38,
                          "name":"新增",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":37,
                          "seqNum":1,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_ROLE_DETAIL",
                          "authorityDesc":"查看详情",
                          "icon":null,
                          "id":39,
                          "name":"查看详情",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":37,
                          "seqNum":2,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_ROLE_EDIT",
                          "authorityDesc":"编辑",
                          "icon":null,
                          "id":40,
                          "name":"编辑",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":37,
                          "seqNum":3,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_ROLE_STOP",
                          "authorityDesc":"停用",
                          "icon":null,
                          "id":41,
                          "name":"停用",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":37,
                          "seqNum":4,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_ROLE_DEL",
                          "authorityDesc":"删除",
                          "icon":null,
                          "id":42,
                          "name":"删除",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":37,
                          "seqNum":5,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_ROLE_QUERY",
                          "authorityDesc":"查询",
                          "icon":null,
                          "id":43,
                          "name":"查询",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":37,
                          "seqNum":6,
                          "updateTime":null,
                          "updator":null
                      }
                  ],
                  "lstIncludeId":null,
                  "lstNotIncludeId":null,
                  "parentId":29,
                  "seqNum":2,
                  "updateTime":null,
                  "updator":null
              },
              {
                  "authorityCode":"SYS_DICT",
                  "authorityDesc":"数据字典",
                  "icon":"reconciliation",
                  "id":44,
                  "name":"数据字典",
                  "authorityStatus":"1",
                  "authorityType":"1",
                  "path":"/dict",
                  "createTime":1557417600000,
                  "creator":1,
                  "lstChild":[
                      {
                          "authorityCode":"SYS_DICT_ADD",
                          "authorityDesc":"新增",
                          "icon":null,
                          "id":45,
                          "name":"新增",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":44,
                          "seqNum":1,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_DICT_DETAIL",
                          "authorityDesc":"查看详情",
                          "icon":null,
                          "id":46,
                          "name":"查看详情",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":44,
                          "seqNum":2,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_DICT_EDIT",
                          "authorityDesc":"编辑",
                          "icon":null,
                          "id":47,
                          "name":"编辑",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":44,
                          "seqNum":3,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_DICT_DEL",
                          "authorityDesc":"删除",
                          "icon":null,
                          "id":48,
                          "name":"删除",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":44,
                          "seqNum":4,
                          "updateTime":null,
                          "updator":null
                      },
                      {
                          "authorityCode":"SYS_DICT_QUERY",
                          "authorityDesc":"查询",
                          "icon":null,
                          "id":49,
                          "name":"查询",
                          "authorityStatus":"1",
                          "authorityType":"2",
                          "path":"",
                          "createTime":1557417600000,
                          "creator":1,
                          "lstChild":null,
                          "lstIncludeId":null,
                          "lstNotIncludeId":null,
                          "parentId":44,
                          "seqNum":5,
                          "updateTime":null,
                          "updator":null
                      }
                  ],
                  "lstIncludeId":null,
                  "lstNotIncludeId":null,
                  "parentId":29,
                  "seqNum":3,
                  "updateTime":null,
                  "updator":null
              }
          ],
          "lstIncludeId":null,
          "lstNotIncludeId":null,
          "parentId":0,
          "seqNum":3,
          "updateTime":null,
          "updator":null
      }
  ]
  }
})
