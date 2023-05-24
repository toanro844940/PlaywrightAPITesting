const fs = require('fs');
const path = require('path');
const postContent = require('./data.json')
const {test,expect} = require("@playwright/test");
const { json } = require('body-parser');
test('should be able to send a Post method request', async({request}) => { 
    // const dataFileLocation = path.resolve(__dirname, './data.json');
    // const postContent = JSON.parse(fs.readFileSync(dataFileLocation));
    // const postContent = {
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    // }
    console.log(postContent);
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        data: postContent
    }   
    let response = await request.post(url, options);
    const responseBody = await response.json();
    console.log(responseBody);
    const status = await response.status();
    const {title, body, userId, id} = responseBody;
    expect(status).toBe(201);
    expect(title).toBe('tony');
    expect(body).toBe('bar');
    expect(userId).toBe(1);
});
test('should be able to send a Put method request', async({request}) => {
    const putContent = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const options = {
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        data: putContent
    } 
    const response = await request.put(url, options) 
    const responseBody = await response.json();
    console.log(responseBody);
    console.log(await response.status());
});