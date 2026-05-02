import { html, type TemplateResult } from 'lit'

export function safeRender<T> (renderFn: () => T): T | TemplateResult {
  try {
    return renderFn()
  } catch (e) {
    console.error('tablet-clock-card - Error while rendering tablet-clock-card component:', e)
    return html``
  }
}
