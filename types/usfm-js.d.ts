declare module "usfm-js" {
  export type UsfmVerseObject = {
    type?: string;
    tag?: string;
    text?: string;
    content?: string;
    endMarkerChar?: string;
    nextChar?: string;
    children?: UsfmVerseObject[];
  };

  export type UsfmVerseData = {
    verseObjects?: UsfmVerseObject[];
  };

  export type UsfmChapter = Record<string, UsfmVerseData>;

  export type UsfmBible = {
    chapters: Record<string, UsfmChapter>;
  };

  export function toJSON(usfmText: string): UsfmBible;
}