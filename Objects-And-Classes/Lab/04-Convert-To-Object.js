function convertToObject(json){

    
    Object.entries(JSON.parse(json)).forEach(pair => {
        console.log(`${pair[0]}: ${pair[1]}`);
    });
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}'
)