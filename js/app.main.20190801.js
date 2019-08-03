//是否为内网
var innerip;

//得到每个点击的需要跳转的地址具体常量类
function getConstant(name) {
    var constants = {
        1.1: "任务管理---Jira<br><br>默认账号：姓名全拼<br>默认密码：姓名简拼<br>地址：",
        1.11: "https://jira.cpyysyb.cn:11112",
        1.111: "",

        1.2: "项目支持---Confluence<br><br>默认账号：姓名全拼<br>默认密码：姓名简拼<br>地址：",
        1.21: "https://confluence.cpyysyb.cn:11113",
        1.211: "https://confluence.cpyysyb.cn:11113",


        2.1: "代码仓库---GitLab<br><br>默认账号：姓名全拼<br>默认密码：姓名全拼(不足8位末尾补0)<br><br>地址：",
        2.11: "https://git.cpyysyb.cn:11114/git",
        2.111: "https://git.cpyysyb.cn:11114/git",

        2.3: "产品仓库---Nexus<br>地址：",
        2.31: "http://192.168.85.6:8081",
        2.311: "",

        3.1: "构建管理---Jenkins<br>地址：http://192.168.85.5:6060",
        3.11: "http://192.168.85.5:6060",
        3.111: "",

        3.2: "质量管理---Sonar<br>地址：https://cpyysyb.cn:11111/sonar/",
        3.21: "https://sonar.cpyysyb.cn:11115",
        3.211: "",


    };
    return constants[name]
}

//是否进行提示的按钮监听（切换是否显示提示)
$('#isNotifi').on('click', function () {
    var $btn = $(this).text('変更中.......').blur();
    setTimeout(function () {
        if ($btn.hasClass("btn-success")) {
            notifi();
            $btn.removeClass("btn-success").text("已关闭提示")
        } else
            $btn.addClass("btn-success").text("已开启提示")
    }, 1000)
});

//点击条目按钮跳转
function toGo(index) {
    if ($('#isNotifi').hasClass("btn-success"))
        giveNotfi(index);
    else {
        openLink(index);
    }
}

//跳转link
function openLink(index) {
    //是否内网
    if (innerip)
        window.open(getConstant(index + '1'));
    else if (getConstant(index + '11') === '')
        AddressInaccessible();
    else
        window.open(getConstant(index + '11'));
}

//提示窗
function notifi() {
    new PNotify({
        title: '友情提示',
        text: '关闭提示,您将不能得到地址的相关提示信息',
        addclass: 'stack-top-left',
        type: 'warn',
        stack: {
            "dir1": "down",
            "dir2": "right",
            "push": "top"
        }
    })
}

//展示提示窗口
function ShowNotice(title, text, type, delay) {
    PNotify.prototype.options.styling = "bootstrap3";
    new PNotify({
        title: title,
        text: text,
        type: type,
        delay: delay,
        hide: true //是否自动关闭
    });
}

//链接提示窗
function giveNotfi(index) {
    var text = getConstant(index);
    if (text === "") {
        openLink(index);
        return false;
    }
    var percent = 5;
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
    });

    setTimeout(function () {
        notice.update({
            // title: false
        });
        var interval = setInterval(function () {

            percent--;
            var options = {
                width: "220px",
                title: percent + " 秒后为您跳转",
                text: "<br>" + text
            };
            if (percent === 3) options.title = "即将跳转，请稍后";
            if (percent <= 0) {
                window.clearInterval(interval);
                options.title = "";
                options.text = "已为您跳转!";
                options.addclass = "bg-success";
                options.type = "success";
                options.hide = false;
                options.buttons = {
                    closer: true,
                    sticker: true
                };
                options.icon = 'icon-check';
                options.opacity = 1;
                options.hide = true;
                options.width = PNotify.prototype.options.width;
                setTimeout(function () {
                    //跳转链接
                    openLink(index);
                }, 1500)
            }
            notice.update(options);
        }, 1000);
    }, 500);
}


// 不存在外网地址
function AddressInaccessible() {
    //展示提示信息
    ShowNotice('十分抱歉!', '您处于外网访问模式，但要访问的地址可能不存在外网形式访问', 'error', 1000);
}

//检测是否为外网访问
(function () {
    // 提示语
    var checkNetMessage;
    // 弹出类型
    var noticeType;

    //判断url地址
    if (document.URL.indexOf("cpyysyb.cn") > 0) {
        checkNetMessage = '检测到您正处于外网环境，所有的定向将会以外网形式跳转';
        innerip = false;
        noticeType = 'success';
    } else {
        checkNetMessage = '检测到您正处于内网环境，所有的定向将会以内网形式跳转';
        innerip = true;
        noticeType = 'info';
    }
    //展示提示信息
    ShowNotice('提示', checkNetMessage, noticeType, 1000);
}());
