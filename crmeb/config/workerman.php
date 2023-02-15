<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2023 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
return [
    'admin' => [
        //协议
        'protocol' => 'websocket',
        //监听地址
        'ip' => '0.0.0.0',
        //监听端口
        'port' => 20002,
        //设置当前Worker实例启动多少个进程
        'serverCount' => 1,
    ],

    'chat' => [
        //协议
        'protocol' => 'websocket',
        //监听地址
        'ip' => '0.0.0.0',
        //监听端口
        'port' => 20003,
        //设置当前Worker实例启动多少个进程
        'serverCount' => 1,
    ],

    'channel' => [
        //内部通讯监听端口
        'port' => 20012,
        //内部通讯地址
        'ip' => '127.0.0.1',
    ],

];
