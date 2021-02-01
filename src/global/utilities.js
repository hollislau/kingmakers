// rejection-based retry with exponential backoff
export const callWithRetry = async (call, depth = 0) => {
  const wait = (ms) => new Promise((res) => setTimeout(res, ms))

  try {
    return await call()
  } catch (err) {
    if (depth > 7) {
      throw err
    }

    await wait(10 * 2 ** depth)

    return callWithRetry(call, depth + 1)
  }
}

// returns a function, that, as long as it continues to be invoked, will not trigger cb
// cb will be called after function stops being called for 'wait' milliseconds
// if 'immediate' is passed, trigger cb on leading instead of trailing edge
export const debounce = (cb, wait, immediate = false) => {
  let timeout

  return function (...args) {
    const callNow = immediate && !timeout

    const later = () => {
      timeout = null

      if (!immediate) {
        cb.apply(this, args)
      }
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) {
      cb.apply(this, args)
    }
  }
}
