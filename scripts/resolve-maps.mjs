import https from 'node:https';

const url = 'https://maps.app.goo.gl/eMJdPx2m1eb8D5cV8?g_st=ic';

function getUrl(targetUrl) {
  https.get(targetUrl, (res) => {
    console.log('STATUS:', res.statusCode);
    console.log('LOCATION:', res.headers.location);
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      getUrl(res.headers.location);
      return;
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('FINAL URL:', targetUrl);
      const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
      console.log('TITLE:', titleMatch ? titleMatch[1] : 'none');
      const ogTitle = data.match(/property="og:title"\s+content="([^"]+)"/i) || data.match(/content="([^"]+)"\s+property="og:title"/i);
      console.log('OG TITLE:', ogTitle ? ogTitle[1] : 'none');
      const ogDesc = data.match(/property="og:description"\s+content="([^"]+)"/i) || data.match(/content="([^"]+)"\s+property="og:description"/i);
      console.log('OG DESC:', ogDesc ? ogDesc[1] : 'none');
    });
  }).on('error', err => console.error(err));
}

getUrl(url);
