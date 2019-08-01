//初始化链接列表
(function () {

    // //所有列表类型
    // var typeList = [];
    // //所有菜单
    // var menuList = [
    //     //基础地址[也可以使用字典]
    //     {"id": "", "rowType":"基础地址","cellType":"团队协同", "name": "111", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"基础地址","cellType":"团队协同", "name": "aaa", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"基础地址","cellType":"版本管理", "name": "222", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"基础地址","cellType":"版本管理", "name": "bbb", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"基础地址","cellType":"构建及质量管理", "name": "333", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"基础地址","cellType":"构建及质量管理", "name": "ccc", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     //UAT环境
    //     {"id": "", "rowType":"服务地址","cellType":"UAT环境", "name": "s111", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"服务地址","cellType":"UAT环境", "name": "saaa", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"服务地址","cellType":"开发环境", "name": "s222", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"服务地址","cellType":"开发环境", "name": "sbbb", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"服务地址","cellType":"生产环境", "name": "s333", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    //     {"id": "", "rowType":"服务地址","cellType":"生产环境", "name": "sccc", "localUrl": "www.baidu.com", "outUrl": "www.baidu.com", "remark": "aaaa"},
    // ];

    //读取本地json数据[后期可以改成远程调用]
    $.ajax({
        type: 'GET',
        url: 'source/data.json',
        contentType: "application/json;cherset=utf-8",
        dataType: "json",
        async: false,
        success: function (data) {
            console.log(data.titleList[0].name);

            showMenuList(data);
        }
    });

    //展示菜单集合
    function showMenuList(data) {
        //判断是否为空
        if (JSON.stringify(data) === "{}") {
            return false;
        }

        var tbody = "";
        $.each(data.titleList, function (n, obj) {
            console.log(innerip);

            // var trs = "";
            // trs += " < tr > <td > " +value+" < /td></tr > ";
            // tbody += trs;
        });

        $("#menuList").append(tbody);

    }
}());
