import { regex } from "regex";

const enum Style {
  BOLD,
  ITALIC,
  CODE,
}

interface PostElement {
  content: string;
  href?: string;
  styles: Style[];
  appliedStyles: Style[];
}

const STYLE_TO_CLASSNAME = {
  [Style.BOLD]: "md-bold",
  [Style.ITALIC]: "md-italic",
  [Style.CODE]: "md-code",
};

const applyTextFilter = (
  postElement: PostElement,
  style: Style,
  wrapper: string
) => {
  let content = postElement.content;
  let postElements = [] as PostElement[];
  const newAppliedStyles = [...new Set([...postElement.appliedStyles, style])];
  while (true) {
    const match = content.match(
      regex`.*(?<fullMatch>${wrapper}(?<internalContent>.*?)${wrapper}).*`
    );
    if (!match || !match.groups) {
      postElements.push({
        content: content,
        styles: postElement.styles,
        appliedStyles: newAppliedStyles,
      });
      break;
    } else {
      const internalContent = match.groups["internalContent"];
      const fullMatch = match.groups["fullMatch"];
      const matchIndex = content.indexOf(fullMatch);
      const [pre, post] = [
        content.slice(0, matchIndex),
        content.slice(matchIndex + fullMatch.length),
      ];
      postElements.push({
        content: pre,
        styles: postElement.styles,
        appliedStyles: newAppliedStyles,
      });
      postElements.push({
        content: internalContent,
        styles: [...postElement.styles, style],
        appliedStyles: newAppliedStyles,
      });
      content = post;
    }
  }
  return postElements;
};

const applyBoldface = (postElement: PostElement) =>
  applyTextFilter(postElement, Style.BOLD, "**");

const applyItalic = (postElement: PostElement): PostElement[] =>
  applyTextFilter(postElement, Style.ITALIC, "_");

const applyCode = (postElement: PostElement): PostElement[] =>
  applyTextFilter(postElement, Style.CODE, "`");

const isPostElementFinalized = (postElement: PostElement) => {
  return (
    Style.BOLD in postElement.appliedStyles &&
    Style.ITALIC in postElement.appliedStyles &&
    Style.CODE in postElement.appliedStyles
  );
};

const applyFilter = (
  postElements: PostElement[],
  filter: (pe: PostElement) => PostElement[]
) => {
  let newPostElements = [] as PostElement[];
  for (const inputPostElement of postElements) {
    if (!isPostElementFinalized(inputPostElement)) {
      newPostElements = [...newPostElements, ...filter(inputPostElement)];
    }
  }
  return newPostElements;
};

const applyAllFilters = (
  initialPostElement: PostElement,
  filters: ((pe: PostElement) => PostElement[])[]
) => {
  let newPostElements = [initialPostElement];
  for (const filter of filters) {
    newPostElements = applyFilter(newPostElements, filter);
  }
  return newPostElements;
};

const getClassNames = (styles: Style[]) => {
  return styles.map((style) => STYLE_TO_CLASSNAME[style]).join(" ");
};

const RenderedPostElement = ({ postElement }: { postElement: PostElement }) => {
  return (
    <span className={getClassNames(postElement.styles)}>
      {postElement.content}
    </span>
  );
};

const renderPostElements = (postElements: PostElement[]) => {
  return postElements.map((postElement, i) => (
    <RenderedPostElement postElement={postElement} key={i} />
  ));
};

export const convertMarcdownToJsx = (md: string) => {
  const initialPostElement: PostElement = {
    content: md,
    styles: [],
    appliedStyles: [],
  };
  const filters = [applyBoldface, applyItalic, applyCode];
  const postElements = applyAllFilters(initialPostElement, filters);
  console.log(postElements);
  return <>{renderPostElements(postElements)}</>;
};
