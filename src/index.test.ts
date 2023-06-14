import test, { ExecutionContext } from "ava";
import KeueIO from "./index";

test("GET request should return data", async (t: ExecutionContext) => {
    const request = new KeueIO({ apiKey: "123", app: "test" });
    const response: any = await request.get(
        "https://webhook.site/0db2a3e4-37a8-4390-9e62-ef35ea8d3f86",
    );
    t.is(response.message, "world");
});

test("POST request should return ID", async (t: ExecutionContext) => {
    const request = new KeueIO({ apiKey: "123", app: "test" });
    const postData = { name: "John", age: 25 };
    const response: any = await request.post(
        "https://webhook.site/0db2a3e4-37a8-4390-9e62-ef35ea8d3f86",
        postData,
    );
    t.is(response.message, "world");
});
test("publish message", async (t: ExecutionContext) => {
    const keue = new KeueIO({ apiKey: "123", app: "chris" });
    const postData = { name: "John", age: 25 };
    const response: any = await keue.publish(postData);
    console.log("publish message", response);
    t.truthy(response.messageId);
});
