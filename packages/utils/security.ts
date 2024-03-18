/**
 * 원래 텍스트를 저장할 맵.
 */
const originalTextMap = new WeakMap<Node, string>()

/**
 * 텍스트의 일부를 '*'로 가림
 */
const maskPartialText = (text: string): string => {
  return text
    .split(' ')
    .map((word) => {
      if (word.length > 2) {
        const partToMask = word.slice(1, -1)
        const maskedPart = '*'.repeat(partToMask.length)
        return word[0] + maskedPart + word[word.length - 1]
      }
      return word
    })
    .join(' ')
}

/**
 * 웹 페이지의 모든 텍스트 노드에서 전체 문자를 '*'로 변경.
 */
export const toggleTextVisibility = () => {
  const elements = document.querySelectorAll('body *')

  elements.forEach((element) => {
    Array.from(element.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE && child.nodeValue) {
        if (originalTextMap.has(child)) {
          // 원래 텍스트로 복원
          child.nodeValue = originalTextMap.get(child) || ''
          originalTextMap.delete(child)
        } else {
          // 원래 텍스트를 저장
          originalTextMap.set(child, child.nodeValue)
          // 대체 문자열 생성 (여기서는 '*'를 사용)
          child.nodeValue = '*'.repeat(child.nodeValue.length)
        }
      }
    })
  })
}

/**
 * 웹 페이지의 모든 텍스트 노드에서 일부 문자만 '*'로 변경.
 */
export const togglePartialTextVisibility = () => {
  const elements = document.querySelectorAll('body *')

  elements.forEach((element) => {
    Array.from(element.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE && child.nodeValue) {
        if (originalTextMap.has(child)) {
          child.nodeValue = originalTextMap.get(child) || ''
          originalTextMap.delete(child)
        } else {
          originalTextMap.set(child, child.nodeValue)
          child.nodeValue = maskPartialText(child.nodeValue)
        }
      }
    })
  })
}
