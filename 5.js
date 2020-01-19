function maxParam(text, searchWords) {
    const theSplit = text.split('');
    let sort_arr = theSplit.slice().sort();
    let result = [];
    for (i = 0; i < sort_arr.length; i++) {
        sort_arr[i] === searchWords ? result.push(sort_arr[i]) : null;
    }
    if (result.length === 0) {
        console.log('Not found!');
    } else {
        console.log(`Found ${result.length} '${searchWords}' from ${text}`);
    }
}

maxParam("javascript", "x");