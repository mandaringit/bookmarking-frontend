export const removeHTMLTag = (text: string) =>
  text.replace(/(<([^>]+)>)/gi, "");

export const extractFname = (thumbnail: string) => {
  const extracted = thumbnail.match(/(?<=(fname=)).+/gi);
  return extracted ? extracted[0] : "";
};

export const getFullThumbnailUrl = (fname: string, width?: number) => {
  return `http://t1.daumcdn.net/thumb/R${width || 150}x0/?fname=${fname}`;
};
