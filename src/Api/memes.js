export const getAllMemes=async()=>{
    const result=await fetch("https://api.imgflip.com/get_memes");
    return await result.json();
}