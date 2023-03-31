declare global {
  namespace React {
    interface FunctionComponent<P = {}> {
      getInitialProps(): void;
    }
  }
}
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
