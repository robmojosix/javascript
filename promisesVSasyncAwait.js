() => {
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
async () => {
  const data = await getDepartmentsListFromS3({ client });

  const RootComponent = await import(rootComponentPath).default;
  res.status(200).render(
   'template',
   { data, assets, renderedHtml: isDev ? '' : renderToString(<RootComponent />)
  });
}

// promises
async () => {
  const deptData = getDepartmentsListFromS3({ client });

  const rootComponent = import(rootComponentPath).default;


  Promise.all([deptData, rootComponent]).then((data, RootComponent) => {
    res.status(200).render(
     'template',
     { data, assets, renderedHtml: isDev ? '' : renderToString(<RootComponent />)
    });
  });
}
