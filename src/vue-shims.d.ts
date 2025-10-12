declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    [key: string]: any
  }
}

declare module '@vue/runtime-dom' {
  export interface HTMLAttributes {
    [key: string]: any
  }
}

export {}
