export const removeHTMLTag = (text: string) =>
  text.replace(/(<([^>]+)>)/gi, "");

export const extractKakaoBookThumbnailFname = (thumbnail: string) => {
  const extracted = thumbnail.match(/(?<=(fname=)).+/gi);
  return extracted ? extracted[0] : "";
};

export const getKakaoThumbnailUrl = (thumbnail: string, width?: number) => {
  const fname = extractKakaoBookThumbnailFname(thumbnail);
  return `http://t1.daumcdn.net/thumb/R${width || 150}x0/?fname=${fname}`;
};
