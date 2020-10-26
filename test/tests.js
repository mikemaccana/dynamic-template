import { saveTemplate, evalTemplate } from "../index.js";
import { strictEqual } from "assert";

suite(`ES6 template literals`, function () {
  test(`work`, function () {
    const greeting1 = saveTemplate("Hi ${firstName}", { firstName: "Joe" });
    strictEqual(greeting1, "Hi Joe");

    const greeting2 = saveTemplate("Hi ${firstName.substring(1)}", {
      "firstName.substring(1)": "Joe",
    });
    strictEqual(greeting2, "Hi Joe");

    const greeting3 = evalTemplate("Hi ${firstName.substring(1)}", {
      firstName: "Joe",
    });
    strictEqual(greeting3, "Hi oe");
  });
});
