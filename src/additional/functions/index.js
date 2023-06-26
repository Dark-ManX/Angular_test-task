const languageChanger = (state) => {
  if (state.language === "en") {
    return { language: "uk" };
  }
  return { language: "en" };
};

export default {
  languageChanger,
};
