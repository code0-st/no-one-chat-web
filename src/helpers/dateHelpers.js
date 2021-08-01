const addZeroHandler = (_time) => {
    const time = _time.toString()
    if (time.length === 1) {
        return `0${time}`
    }
    return time
}

export function formatIsoToDate(_date) {
    return _date.slice(8, 10) + '.' + _date.slice(5, 7) + '.' + _date.slice(0, 4)
}

export function formatIsoToTime(_date) {
    const hours = _date.slice(11, 13)
    const minutes = _date.slice(14, 16)
    return addZeroHandler(+hours) + ':' + addZeroHandler(+minutes)
}
