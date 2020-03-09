module.exports = function check(str, bracketsConfig) {
    for (let index = 0; index < bracketsConfig.length+1; index++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            while (str.split('').findIndex((item, index, array)=>array[index]==bracketsConfig[i][0] && array[index+1]==bracketsConfig[i][1])!=-1) {
                str=str.replace(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`,"");
            }        
            if(str=='')
            {
                return true;
            }
        }
    }
    return false;
}
