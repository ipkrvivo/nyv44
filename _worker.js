export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/ed6d6e6b-4cca-49eb-82a8-fec963e2bba2')) {
      url.hostname = 'rrshadwwsok.jjyut.repl.co'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
