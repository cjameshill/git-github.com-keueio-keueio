import test, { ExecutionContext } from "ava";
import HttpRequestWrapper from "./index";

test("GET request should return data", async (t: ExecutionContext) => {
    const request = new HttpRequestWrapper();
    const response: any = await request.get(
        "https://webhook.site/0db2a3e4-37a8-4390-9e62-ef35ea8d3f86",
    );
    t.is(response.message, "world");
});

test("POST request should return ID", async (t: ExecutionContext) => {
    const request = new HttpRequestWrapper();
    const postData = { name: "John", age: 25 };
    const response: any = await request.post(
        "https://webhook.site/0db2a3e4-37a8-4390-9e62-ef35ea8d3f86",
        postData,
    );
    t.is(response.message, "world");
});
