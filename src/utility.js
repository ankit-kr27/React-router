export const githubLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/ankit-kr27")
    return response.json();
}