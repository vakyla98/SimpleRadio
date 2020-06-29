export default function listenKey(keyCode, callback) {
    window.addEventListener('keyup', e => {
        if (e.code === keyCode) callback()
    })
}
