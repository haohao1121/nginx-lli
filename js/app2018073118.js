"use strict"

//是否为内网
var innerip

//得到每个点击的需要跳转的地址具体常量类
function getConstant (name) {
    var constants = {
        1.1: "任务管理---Jira<br><br>默认账号：姓名全拼<br>默认密码：姓名简拼<br>地址：",
        1.11: "https://cpyysyb.cn:11111/jira/",
        1.111: "",

        1.2: "项目支持---Confluence<br><br>默认账号：姓名全拼<br>默认密码：姓名简拼<br>地址：",
        1.21: "http://192.168.85.6:30012/confluence/",
        1.211: "http://cpyysyb.cn:11808/confluence/",

        1.3: "产品应用事业部用户统一管理---Crowd<br><br>默认账号：姓名全拼<br>默认密码：姓名全拼<br><br>地址：",
        1.31: "https://cpyysyb.cn:11111/crowd/",
        1.311: "https://cpyysyb.cn:11111/crowd/",

        2.1: "代码仓库---GitLab<br><br>默认账号：姓名全拼<br>默认密码：姓名全拼(不足8位末尾补0)<br><br>地址：",
        2.11: "http://192.168.85.6:14015/git/explore/groups",
        2.111: "http://cpyysyb.cn:11808/git/",

        2.2: "文档管理---subversion<br><br>默认账号：姓名全拼<br>默认密码：姓名简拼<br>地址：",
        2.21: "svn://192.168.85.6/doc",
        2.211: "",

        2.3: "产品仓库---Nexus<br>地址：",
        2.31: "http://192.168.85.6:8081",
        2.311: "",

        3.1: "构建管理---Jenkins<br>地址：http://192.168.85.5:6060",
        3.11: "http://192.168.85.5:6060",
        3.111: "",

        3.2: "质量管理---Sonar<br>地址：https://cpyysyb.cn:11111/sonar/",
        3.21: "https://cpyysyb.cn:11111/sonar/",
        3.211: "",

        3.3: "自动构建---Bamboo<br>地址：http://192.168.85.7:8085",
        3.31: "http://192.168.85.7:8085",
        3.311: "",

        3.4: "部署管理---Docker<br>地址：http://192.168.85.7:9000/",
        3.41: "http://192.168.85.7:9000/",
        3.411: "",

        4.1: "提示<br>注册中心节点1<br>地址：http://192.168.85.7:50001",
        4.11: "http://192.168.85.7:50001",
        4.111: "",

        4.2: "提示<br>注册中心节点1<br>地址：http://192.168.85.7:50002",
        4.21: "http://192.168.85.7:50002",
        4.211: "",

        4.3: "提示<br>注册中心节点1<br>地址：http://192.168.85.7:50003",
        4.31: "http://192.168.85.7:50003",
        4.311: "",

        4.4: "提示<br>rabbitmq管理地址<br>地址：http://192.168.85.7:8889/",
        4.41: "http://192.168.85.7:8889/",
        4.411: "",

        4.5: "提示<br>前端接入点<br>地址：http://192.168.85.7/",
        4.51: "http://192.168.85.7",
        4.511: "",

        4.6: "提示<br>后端Zuul节点1<br>地址：http://192.168.85.7:56789/info",
        4.61: "http://192.168.85.7:56789/info",
        4.611: "",

        4.7: "提示<br>后端Zuul节点2<br>地址：http://192.168.85.7:56790/info",
        4.71: "http://192.168.85.7:56790/info",
        4.711: "",

        5.1: "提示<br>用户权限管理模块<br>地址：http://192.168.85.7:8882/info",
        5.11: "http://192.168.85.7:8882/info",
        5.111: "",

        5.2: "提示<br>核心管理地址<br>地址：http://192.168.85.7:8847/info",
        5.21: "http://192.168.85.7:8847/info",
        5.211: "",

        6.1: "提示<br>监控地址<br>地址：http://192.168.85.7:33333",
        6.11: "http://192.168.85.7:33333",
        6.111: "",

        12.1: "地址：http://192.168.85.6:8080/mis",
        12.11: "http://192.168.85.8:8887/mis",
        12.111: "http://www.cpyysyb.cn:19142/mis",

        12.2: "地址：http://58.16.65.14:8888/",
        12.21: "http://58.16.65.14:8888/",
        12.211: "",

        12.3: "地址：http://192.168.85.6/axureforba/start.html",
        12.31: "http://192.168.85.6/axureforba/start.html",
        12.311: "",


        12.5: "地址：http://demo.cpyysyb.cn:3000/",
        12.51: "http://demo.cpyysyb.cn:3000/",
        12.511: "",

        12.6: "地址：http://192.168.85.6/axureforliangchuang/start.html",
        12.61: "http://192.168.85.6/axureforliangchuang/start.html#g=1&p=%E9%A6%96%E9%A1%B51_1",
        12.611: "",

        12.7: "地址：http://demo.cpyysyb.cn:8025/",
        12.71: "http://demo.cpyysyb.cn:8025/",
        12.711: "",

        12.8: "地址：http://39.107.126.231:50001/eureka",
        12.81: "http://39.107.126.231:50001/eureka",
        12.811: "",

        12.9: "地址：http://39.107.126.231:15672/",
        12.91: "http://39.107.126.231:15672/",
        12.911: "",

        13.1: "地址：http://192.168.85.7:8025/",
        13.11: "http://192.168.85.7:8025/",
        13.111: "",

        13.2: "地址：http://192.168.85.7:50001/eureka",
        13.21: "http://192.168.85.7:50001/eureka",
        13.211: "",

        13.3: "地址：http://192.168.85.8:15672/",
        13.31: "http://192.168.85.8:15672/",
        13.311: "",

        13.4: "地址：http://192.168.85.9:8025",
        13.41: "http://192.168.85.9:8025",
        13.411: "",

        13.5: "地址：http://192.168.85.9:50004/eureka",
        13.51: "http://192.168.85.9:50004/eureka",
        13.511: "",

        //测试环境两创平台
        13.6: "地址: http://192.168.85.5:3000",
        13.61: "http://192.168.85.7:3000",
        13.611: "",

        //生产环境两创平台
        13.7: "地址: http://103.3.152.40:8889/",
        13.71: "http://103.3.152.40:8889/",
        13.711: "",

        14.1: "地址：http://192.168.85.6/hrsc/start.html",
        14.11: "http://192.168.85.6/hrsc/start.html",
        14.111: "",

        14.2: "地址：http://192.168.85.6/salay/start.html",
        14.21: "http://192.168.85.6/salay/start.html",
        14.211: "",

        14.3: "地址：http://192.168.85.6/sins/start.html",
        14.31: "http://192.168.85.6/sins/start.html",
        14.311: "",

        14.4: "地址：http://192.168.85.6/other/start.html",
        14.41: "http://192.168.85.6/other/start.html",
        14.411: "",

        14.5: "地址：http://103.3.152.230:3000/",
        14.51: "http://103.3.152.230:3000/",
        14.511: "",

        14.6: "地址：http://58.16.65.14:9911/",
        14.61: "http://58.16.65.14:9911/",
        14.611: ""
    }
    return constants[name]
}

//是否进行提示的按钮监听（切换是否显示提示)
$('#isNotifi').on('click', function () {
    var $btn = $(this).text('変更中.......').blur()
    setTimeout(function () {
        if ($btn.hasClass("btn-success")) {
            notifi()
            $btn.removeClass("btn-success").text("已关闭提示")
        } else
            $btn.addClass("btn-success").text("已开启提示")
    }, 1000)
})

//点击条目按钮跳转
function toGo (index) {
    if ($(".btn").hasClass("btn-success"))
        giveNotfi(index)
    else {
        if (innerip)
            window.open(getConstant(index + '1'))
        else if (getConstant(index + '11') == '')
            AddressInaccessible()
        else
            window.open(getConstant(index + '11'))
    }
}

//提示窗
function notifi () {
    new PNotify({
        title: '',
        text: '关闭提示<br>您将不能得到地址的相关提示',
        addclass: 'stack-top-left bg-danger',
        stack: {
            "dir1": "down",
            "dir2": "right",
            "push": "top"
        }
    })
}

function giveNotfi (index) {
    var text = getConstant(index)
    if (text == "") {
        if (innerip)
            window.open(getConstant(index + '1'))
        else if (getConstant(index + '11') == '')
            AddressInaccessible()
        else
            window.open(getConstant(index + '11'))
        return false
    }
    var percent = 8
    var notice = new PNotify({
        title: "请稍后",
        addclass: 'stack-top-left bg-primary',
        type: 'info',
        icon: 'icon-spinner4 spinner',
        hide: false,
        buttons: {
            closer: false,
            sticker: false
        },
        opacity: .9,
        width: "250px",
        stack: {
            "dir1": "down",
            "dir2": "right",
            "push": "top"
        }
    })

    setTimeout(function () {
        notice.update({
            //          title: false
        })
        var interval = setInterval(function () {

            percent--
            var options = {
                width: "220px",
                title: percent + " 秒后为您跳转",
                text: "<br>" + text
            }
            if (percent == 3) options.title = "即将跳转，请稍后"
            if (percent <= 0) {
                window.clearInterval(interval)
                options.title = ""
                options.text = "已为您跳转!"
                options.addclass = "bg-success"
                options.type = "success"
                options.hide = false
                options.buttons = {
                    closer: true,
                    sticker: true
                }
                options.icon = 'icon-check'
                options.opacity = 1
                options.hide = true,
                    options.width = PNotify.prototype.options.width
                setTimeout(function () {
                    if (innerip)
                        window.open(getConstant(index + '1'))
                    else if (getConstant(index + '11') == '')
                        AddressInaccessible()
                    else
                        window.open(getConstant(index + '11'))
                }, 1500)
            }
            notice.update(options)
        }, 1000)
    }, 500)
}

// 不存在外网地址
function AddressInaccessible () {
    new PNotify({
        title: '十分抱歉!',
        text: '您处于外网访问模式，但要访问的地址可能不存在外网形式访问。',
        type: 'error'
    })
}

//全局按键事件
// document.onkeydown = function (e) {
//     // 兼容FF和IE和Opera
//     var theEvent = e || window.event;
//     var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
//     if (code == 13) {
//         alert(11);
//         return false;
//     }
//     return true;
// }

//检测是否为外网访问
(function () {
    // 检测提示语
    var checkNetMessage
    // 弹出类型
    var alerttype
    if (document.URL.indexOf("cpyysyb.cn") > 0) {
        checkNetMessage = '检测到您正处于外网环境，所有的定向将会以外网形式跳转'
        innerip = false
        alerttype = 'success'
    } else {
        checkNetMessage = '检测到您正处于内网环境，所有的定向将会以内网形式跳转'
        innerip = true
        alerttype = 'info'
    }
    new PNotify({
        title: '提示',
        text: checkNetMessage,
        type: alerttype,
        delay: 5000
    })
}())
