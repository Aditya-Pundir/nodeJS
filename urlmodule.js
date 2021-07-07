import url from "url";

const myURL = new URL("https://example.com:8080");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log(myURL);
console.log(myURL.href); // To know the whole url.
