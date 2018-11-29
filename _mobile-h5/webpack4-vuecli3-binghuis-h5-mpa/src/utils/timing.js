/* eslint-disable */ !(function () {
    handleAddListener('load', getTiming)

    function handleAddListener(type, fn) {
        if (window.addEventListener) {
            window.addEventListener(type, fn)
        } else {
            window.attachEvent('on' + type, fn)
        }
    }

    function getTiming() {
        try {
            let time = performance.timing;
            let timingObj = {};
            let loadTime = time.loadEventEnd - time.loadEventStart;

            if (loadTime < 0) {
                setTimeout(function () {
                    getTiming();
                }, 200);
                return;
            }

            timingObj['白屏时间'] = time.domLoading - time.navigationStart;
            timingObj['DOM树解析耗时'] = time.domComplete - time.domInteractive;
            timingObj['domReady'] = time.domContentLoadedEventEnd - time.navigationStart;
            timingObj['onLoad时间'] = time.loadEventEnd - time.navigationStart;
            timingObj['DNS查询时间'] = time.domainLookupEnd - time.domainLookupStart;
            timingObj['TCP连接时间'] = time.connectEnd - time.connectStart;
            console.group('%c前端性能监控', 'background: #41b883; color: #fff; padding: 3px; border-radius: 3px; font-weight: normal');
            for (let item in timingObj) {
                console.info('%c' + item + ": " + timingObj[item] + 'ms', 'color: #35495e');
            }
            let firstPaintTime = performance.getEntriesByType('paint')[0];
            console.info(performance.timing);
            console.groupEnd();
        } catch (e) {
            console.info(e);
        }
    }
})();
