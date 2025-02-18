export const genCode = () => {
    const result = (Math.round((Math.random() * 1000000) % 1000000) + 100000).toString();
    
    if (result.length > 6) return result.substring(0, 6);

    return result;
}