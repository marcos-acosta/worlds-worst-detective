import { Span } from "../logic/md-compiler";
import { combineClassnames } from "../logic/util";
import styles from "./SpanComponent.module.css";

interface SpanComponentProps {
  span: Span;
}

export default function SpanComponent(props: SpanComponentProps) {
  const span = props.span;
  let content = <></>;
  if (Array.isArray(span.content)) {
    content = (
      <>
        {span.content.map((span_, i) => (
          <SpanComponent span={span_} key={i} />
        ))}
      </>
    );
  } else {
    content = <>{span.content}</>;
  }
  return (
    <span
      className={combineClassnames(
        span.bold && styles.bold,
        span.italic && styles.italic,
        span.code && styles.code
      )}
    >
      {content}
    </span>
  );
}
