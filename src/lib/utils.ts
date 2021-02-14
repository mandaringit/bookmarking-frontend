export const removeHTMLTag = (text: string) =>
  text.replace(/(<([^>]+)>)/gi, "");

export const extractFname = (thumbnail: string) => {
  // 브라우저 후방탐색 지원 오류 있음
  // const extracted = thumbnail.match(/(?<=(fname=)).+/gi);
  const extracted = thumbnail.split("fname=");
  return extracted ? extracted[1] : "";
};

export const getFullThumbnailUrl = (fname: string, width?: number) => {
  return `http://t1.daumcdn.net/thumb/R${width || 150}x0/?fname=${fname}`;
};
