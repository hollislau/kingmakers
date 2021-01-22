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
