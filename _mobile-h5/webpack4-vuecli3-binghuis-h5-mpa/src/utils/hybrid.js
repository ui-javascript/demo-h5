/** @module utils/hybird  */

import { MOBILE_API } from "../constants/api";

export {
    sendMessage,
    openBrowser,
    openNewWindow,
    exitWindow,
    share,
    exit,
    showRightMenu,
    copy2Clipboard
};

/**
 * 发送消息给移动端
 * @memberof module:utils/hybird
 * @function
 * @param {string} target hybird协议
 * @param {json} [options] 协议参数配置
 * @returns {function} 被执行的命令
 * @see module:constants/api.MOBILE_API
 * @auhtor Nixon
 * @example
 * import { sendMessage } from 'path/to/utils/hybird';
 * import { MOBILE_API } from 'path/to/constants/api';
 * sendMessage(MOBILE_API.OPEN_NEW_WINDOW_URL, { url: 'http://knowbox.com', title: '作业盒子官网' });
 */
function sendMessage(target, options = {}) {
    const fn = function() {
        const params = Object.entries(options)
            .map(([key, value]) => {
                return `${key}=${value}`;
            })
            .join("&");
        const cmd = target + (params.length ? `?${params}` : "");

        window.location.href = cmd;
    };

    fn();

    return fn;
}

/**
 * @memberof module:utils
 * @function
 * @param {string} refresh 是否需要刷新
 * @returns {undefined}
 * @author Mutu
 * @example
 * import { exit } from 'path/to/utils/hybird';
 * exit('1');
 */
function exit(refresh) {
    sendMessage(MOBILE_API.EXIT, {
        refresh
    });
}

/**
 * @memberof module:utils
 * @function
 * @param {String} txt button文字
 * @param {String} jsCallBack 点击button调用的全局函数名
 * @returns {undefined}
 * @author Mutu
 * @example
 * import { showRightMenu } from 'path/to/utils/hybird';
 * showRightMenu('点击', 'refresh');
 * window.refresh = function() {};
 */
function showRightMenu(txt, jsCallBack) {
    sendMessage(MOBILE_API.SHOW_RIGHT_MENU_URL, {
        txt,
        jsCallBack
    });
}

/**
 * 打开用户默认浏览器浏览器
 * @memberof module:utils/hybird
 * @function
 * @param {string} url 移动端浏览器默认加载的地址
 * @returns {undefined}
 * @author Nixon
 * @example
 * import { openBrowser } from 'path/to/utils/hybird';
 * openBrowser('http://knowbox.com');
 */
function openBrowser(url) {
    sendMessage(MOBILE_API.OPEN_BROWSER_URL, {
        url: encodeURIComponent(url)
    });
}

/**
 * 打开新窗口
 * @memberof module:utils/hybird
 * @function
 * @param {string} url 新窗口加载的地址
 * @param {string} title 新窗口显示的标题
 * @returns {undefined}
 */
function openNewWindow(url, title) {
    sendMessage(MOBILE_API.OPEN_NEW_WINDOW_URL, {
        url: encodeURIComponent(url),
        title: encodeURIComponent(title)
    });
}

/**
 * @memberof module:utils/hybird
 * @function
 * @returns {undefined}
 */
function exitWindow() {
    sendMessage(MOBILE_API.EXIT_WINDOW_URL);
}

/**
 * 利用端上接口分享信息
 * @memberof module:utils/hybird
 * @function
 * @param {string} platform 平台
 * @param {string} text 分享文案
 * @param {string} title 分享标题
 * @param {string} imageUrl 分享图片Logo
 * @param {string} titleUrl 标题链接
 * @param {string} url 分享的链接地址
 * @param {string} description 描述
 * @param {string} site 来源
 * @param {function} handler 回调函数
 * @returns {undefined}
 * @example
 * import { share } from 'path/to/utils/hybird';
 * share(
 *     "WXCircle",
 *     孩子单词老记不住，60天让孩子爱上说英语",
 *     184本适合小学生的迪士尼英文有声绘本，暑假必备",
 *     https://knowapp.b0.upaiyun.com/ss/miniapp/1000_gold_coin_box/app/share/share-logo@1.png",
 *     location.origin + location.pathname + "#/share",
 *     location.origin + location.pathname + "#/share",
 *     "",
 *     作业盒子",
 *     https://ssapp.knowbox.cn",
 *     shareCallback"
 * );
 * // 分享回调
 * window.shareCallback ||
 * (window.shareCallback = r => {
 * if (r == "success") {
 *       console.log("分享成功");
 *     }
 * });
 */
function share(
    platform,
    text,
    title,
    imageUrl,
    titleUrl,
    url,
    description,
    site,
    siteUrl,
    handler
) {
    let params = {
        text: text,
        imageUrl: imageUrl,
        title: title,
        titleUrl: titleUrl,
        url: url,
        description: description,
        site: site,
        siteUrl: siteUrl,
        type: 2
    };

    params = encodeURIComponent(JSON.stringify(params));

    window.shareCallBack = handler || function() {};
    console.log(platform, JSON.parse(decodeURIComponent(params))); // eslint-disable-line
    sendMessage(MOBILE_API.SHARE_URL, {
        platform,
        data: params,
        jsCallBack: "shareCallback"
    });
}

/**
 * 利用端上拷贝到剪贴板
 * @memberof module:utils/hybird
 * @function
 * @returns {undefined}
 */
function copy2Clipboard(content) {
    window.location.href = `hybird://method/copy2Clipboard?content=${content}`;
}
