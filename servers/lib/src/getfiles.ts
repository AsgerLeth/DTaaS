import glob from 'glob';



// Get all files in directory

glob("src/*", (err, res) => {
  if (err) {
    console.log('Error', err);
  } else {
    const files = {files: res};
    console.log(files);
  }
});
