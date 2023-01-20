// 예제 1
export function rating(driver) {
    return dvr.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
    const result = [];
    result.push(['name', customer.name]);
    result.push(['location', customer.location]);
    return result;
}