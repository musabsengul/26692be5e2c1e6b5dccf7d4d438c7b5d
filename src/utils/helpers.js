export const helpers = {
    formatCurrency: new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    })
}

export function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
