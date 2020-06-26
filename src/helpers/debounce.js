export default function debounce(f, ms) {
    let isCooldown = false,
        curentArgs

    return function() {
        curentArgs = arguments
        if (isCooldown) return

        isCooldown = true

        setTimeout(() => {
            f.apply(this, curentArgs)
            isCooldown = false
        }, ms)
    }
}
