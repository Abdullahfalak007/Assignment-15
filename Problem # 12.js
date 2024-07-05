function parseURL(url) {
  let parsedURL = new URL(url);
  return {
    protocol: parsedURL.protocol,
    hostname: parsedURL.hostname,
    pathname: parsedURL.pathname,
    search: parsedURL.search,
  };
}

let url = "https://www.example.com/path?key=value";
console.log("Parsed URL:", parseURL(url));
