function createError (statusCode, message, responseText) {
  const error = {
    error: {
      statusCode,
      message
    }
  };

  if (!!responseText) {
    error.responseText = responseText;
  }

  return error;
}

function createOTTHeader (name) {
  const headerName = name.charAt(0).toUpperCase() + name.slice(1);
  return 'X-SkyOTT-' + headerName;
}

export default function request (url, options = {}, req = new XMLHttpRequest()) {
  return new Promise(function requestPromise (resolve, reject) {
    const defaults = {
      method: 'GET',
      timeout: 20000
    };

    for (const key in defaults) {
      if (!options.hasOwnProperty(key)) {
        options[key] = defaults[key];
      }
    }

    function onError () {
      reject(createError(req.status, 'Generic network error'));
    }
    
    function onLoad () {
      const statusCode = req.status;

      if ((statusCode >= 200 && statusCode < 300) || statusCode === 304 || statusCode === 1223) {
        try {
          const response = req.response || req.responseText;
          if (response) {
            resolve(JSON.parse(response));
          } else {
            resolve();
          }
        } catch (e) {
          reject(createError(statusCode, 'Malformed response'));
        }
      } else {
        try {
          reject(createError(statusCode, '', req.responseText ? JSON.parse(req.responseText) : req.statusText));
        } catch (e) {
          reject(createError(statusCode, 'Malformed response'));
        }
      }
    }

    function onTimeout () {
      reject(createError('timeout', 'Request timeout'));
    }

    req.withCredentials = options.withCredentials ? options.withCredentials : false;
    req.onerror = onError;
    req.onload = onLoad;
    req.ontimeout = onTimeout;

    req.open(options.method, url);
    if (options.headers) {
      const headers = options.headers;
      for (const value in headers) {
        if (headers.hasOwnProperty(value)) {
          if (value === 'device' || value === 'territory' || value === 'language' || value === 'proposition' || value === 'provider') {
            req.setRequestHeader(createOTTHeader(value), headers[value]);
          } else {
            req.setRequestHeader(value, headers[value]);
          }
        }
      }
    }
    req.timeout = options.timeout;
    req.send(options.body);
  });
}
