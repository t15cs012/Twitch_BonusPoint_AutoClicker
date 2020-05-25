// ボーナスポイントボタンをクリック
function onClickBonusPoint() {
    // 監視ターゲットの取得
    /*--- ボーナスボタンの取得 ---*/
    var button = document.getElementsByClassName('tw-button tw-button--success tw-interactive')

    // 監視の開始
    if (button.length > 0) {
        Array.prototype.forEach.call(button, element => {
            if (element.style.display !== "none") {
                console.log("Click bonus button")
                element.click()
            }
        });
    }

}


// 監視
const observer = new MutationObserver(onClickBonusPoint)


// tw-full-height tw-relative tw-z-aboveが存在するまで探し続ける
var timer = setInterval(() => {
    var bonuspoint_elem = document.getElementsByClassName('tw-full-height tw-relative tw-z-above')
    if (bonuspoint_elem.length > 0) {
        console.log("Found target")
        clearInterval(timer)
        onClickBonusPoint()
        observer.observe(bonuspoint_elem[0], {
            childList: true,
            subtree: true,
            attributes: false
        })
    }
}, 10000);
