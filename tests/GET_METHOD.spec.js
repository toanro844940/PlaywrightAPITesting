const {test, expect} = require("@playwright/test");


test('should be able to send a GET Method request', async({request}) => {
    let response = await request.get("https://jsonplaceholder.typicode.com/posts")
    const status = response.status();
    const data = await response.json();
    const firstPost = data[0];    
    //Verficiation
    expect(status).toBe(200)
    expect(data.length).toBeGreaterThan(1)
    const{userId, id, title, body} = firstPost
    expect(id).toBe(1)
    expect(userId).toBeTruthy
    expect(title).toBeTruthy
    expect(body).toBeTruthy
});

