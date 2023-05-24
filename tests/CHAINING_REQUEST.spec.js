const{test,expect} = require('@playwright/test')
const baseUrl = "https://jsonplaceholder.typicode.com";
const header = {
    'Content-type': 'application/json; charset=UTF-8'
};
const postContent = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};
const putContent = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
}
const postOption = {
    headers: header,
    data: postContent
}
const putOption = {
    headers: header,
    data: putContent
}

test('Create A Record', async({request}) => {
    //perform Post Method Request
    const response = await request.post(baseUrl + "/posts", postContent);
    const responseBody = await response.json();
    let postId = responseBody.id; //101
    postId = Number(postId) - 1;
    const responseStatus = response.status();
    console.log(responseBody);
    console.log(responseStatus);
    
    //perform get method
    const responseGet = await request.get(`${baseUrl}/posts/${postId}`);
    const responseBodyGet = await responseGet.json();
    console.log(responseBodyGet);
    expect(responseBodyGet.id).toBe(postId);
});
