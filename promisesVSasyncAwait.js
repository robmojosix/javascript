// normal promise
const request = require('request');

function request () {
  return new Promise((resolve, reject) => {
    request('https://ponyfoo.com/articles/random', (err, res, body) => {
      if (err) {
        reject(err); return;
      }
      resolve(body);
    });
  });
}

// with promises
const render = () => {
  getDepartmentsListFromS3({ client }).then((data) => {
   console.log(data)
  });

  import(rootComponentPath).then((module) => {
   const RootComponent = module.default;
   res.status(200).render(
     'template',
     { data, assets, renderedHtml: isDev ? '' : renderToString(<RootComponent />)
   });
  });
}

// async/await
const render = async () => {
  const data = await getDepartmentsListFromS3({ client });

  const RootComponent = await import(rootComponentPath).default;
  res.status(200).render(
   'template',
   { data, assets, renderedHtml: isDev ? '' : renderToString(<RootComponent />)
  });
}

// promises
const render = async () => {
  const deptData = getDepartmentsListFromS3({ client });

  const rootComponent = import(rootComponentPath).default;


  Promise.all([deptData, rootComponent]).then((data, RootComponent) => {
    res.status(200).render(
     'template',
     { data, assets, renderedHtml: isDev ? '' : renderToString(<RootComponent />)
    });
  });
}
