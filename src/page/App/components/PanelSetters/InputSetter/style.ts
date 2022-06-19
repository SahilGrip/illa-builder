import { css, SerializedStyles } from "@emotion/react"
import { applyFixedWidthStyle } from "@/page/App/components/PanelSetters/style"

export const applyInputSetterWrapperStyle = (
  isSetterSingleRow: boolean = false,
): SerializedStyles => {
  return isSetterSingleRow
    ? css`
        width: 100%;
        margin-top: 8px;
      `
    : applyFixedWidthStyle
}

export const applyInputSetterStyle = css`
  width: 100%;
`
