// List of options for entry categories
// ! DO NOT CHANGE THIS

export const sortorders = [
    { id: 0, name: "Sort (A-Z)" },
    { id: 1, name: "Sort (Z-A)" },
 ];
 
 export function getCategory(s_id) {
    return sortorders.find(x => x.id === s_id)
 }