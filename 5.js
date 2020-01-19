function maxParam(text, words) {
    const theSplit = text.split('');
    let sort_arr = theSplit.slice().sort();

    let result = [];
    for (i = 0; i < sort_arr.length; i++) {
        if (sort_arr[i] === words) {
            result.push(sort_arr[i]);
        }
    }

    if (result.length === 0) {
        console.log('Not found')
    } else {
        console.log(`Found ${result.length} ${words}`);
    }
    console.log(theSplit);
}

maxParam("javascript", "x");