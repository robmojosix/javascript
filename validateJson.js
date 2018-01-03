function validateJson(json,res) {
  console.log("validating json");
  try {
    return JSON.parse(json);
  }
  catch(err) {
    res.send('Failure parsing json');
  }
}
