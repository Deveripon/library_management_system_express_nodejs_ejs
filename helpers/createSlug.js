export const createSlug = (title) => {
    let slug = title.toLowerCase().replace(/\s+/g, "-");
    return slug;
};
