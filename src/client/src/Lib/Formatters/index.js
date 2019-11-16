import numeral from 'numeral';

export const commaFormatter = (val) => {
    if(val === null || val === "") return 0;
    return numeral(val).format('0,0');
}

export const currencyFormatter = (val) => {
    if(val === null || val === "") return 0;
    return numeral(val).format('$0,0.00');
}

export const commaDecimalFormatter = (val) => {
    if(val === null || val === "") return 0;
    return numeral(val).format('0,0.00');
}

export const percentFormatter = (val) => {
    if(val === null || val === "") return 0;
    return numeral(val).format('0%');
}

export const decimalFormatter = (val) => {
    if(val === null || val === "") return "";
    return numeral(val).format('0.00');
}

export const percentDecimalFormatter = (val) => {
    if(val === null || val === "") return "";
    return numeral(val).format('0.00%');
}

export const dateFormatter = (val) => {
    if(val === null || val === "")
        return "";
    var date = new Date(val);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
}
