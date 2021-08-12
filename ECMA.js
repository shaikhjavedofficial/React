const findStr = (Str) => {
    // const sor = Str.sort()
    // const arrStr = Str.split(" ")
    // console.log(arrStr)
    // let cnt = 0
    // ===================
    // arrStr.forEach(element => {
    //     if (element.toLowerCase() == "lorem ".toLowerCase()) {
    //         cnt = cnt + 1;
    //     }
    // });
    // return cnt;
    // return Str.split(" ").filter((item) => item == "Lorem").length;
    const sor = Str.split(" ").sort()
    return sor.slice;
}
const strData = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci?
`
console.log(findStr(strData))